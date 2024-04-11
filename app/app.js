const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.static('static'));

const imgs = fs.readdirSync("static/images")

const { connection, Branch, findBranch, findSemester, findSubject } = require('./db.js');

//function to generate path of links
function generatePath(params) {
  const pathParams = Object.values(params).join('/');
  return `${pathParams}`;
}

connection.once("open", () => {

  console.log("Connected to mongodb via db.js");

  //Rendering all the branches in homepage
  app.get('/', (req, res) => {
    // returns entire db of branches
    Branch.find()
      .then((branches) => {
        res.render('index', { parameter: "branches", boxes: branches, imgs: imgs }); //boxes = thing to be dynamically rendered
      });
  });

  //Rendering all the semesters in branch
  app.get('/:coursecode', (req, res) => {
    const { coursecode } = req.params;
    // returns only the branch of coursecode ex: CD which has semesters list
    findBranch(coursecode)
      .then(branch => {
        res.render('index', { url: generatePath(req.params), parameter: "semesters", boxes: branch, imgs: imgs });
      })
  });

  //Rendering all the subjects in the semester
  app.get('/:coursecode/:sem', (req, res) => {
    const { coursecode } = req.params;
    const { sem } = req.params;
    // returns only the semester specified of coursecode ex: CD/2 returns 2nd sem of CD which has a subjects list
    findSemester(coursecode, Number(sem))
      .then((semester) => {
        res.render('index', { url: generatePath(req.params), parameter: "subjects", boxes: semester, imgs: imgs });
      })
  });

  //Rendering all the modules in the subject
  app.get('/:coursecode/:sem/:sub', (req, res) => {
    const { coursecode } = req.params;
    const { sem } = req.params;
    const { sub } = req.params;
    //returns the modules of the path specified ex: CD/2/BMATS201/ returns all the modules within the subject
    findSubject(coursecode, Number(sem), sub)
      .then((subject) => {
        res.render('index', { url: generatePath(req.params), parameter: "modules", boxes: subject, imgs: imgs });
      })
  });

  app.get('/login', (req, res) => {
    res.render('login');
  });

  app.get('/signup', (req, res) => {
    res.status(503).send('Not implemented');
  });

  app.get('/admin', (req, res) => {
    res.render('admin', { result: null });
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
