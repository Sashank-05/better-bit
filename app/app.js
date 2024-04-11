const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8080;

const branches = JSON.parse(fs.readFileSync('db-management/branches.json', 'utf8'));
const imgs = fs.readdirSync("static/images")
app.set('view engine', 'ejs');
app.use(express.static('static'));

async function findSemesterByNumber(coursecode, sem) {
  const branch = await Branch.findOne({
    code: coursecode,  // Find branch by code
    semesters: { $elemMatch: { number: sem } } // Search within semesters array
  });

  if (branch) {
    const semester = branch.semesters.find(semester => semester.number === sem);
    return semester; // Return the matching semester
  } else {
    return null; // Return null if branch or semester not found
  }
}

const { connection, Branch } = require('./db.js');
connection.once("open", () => {
  console.log("Connected to mongodb via db.js");
  // Load branches and images data

  app.get('/', (req, res) => {
    Branch.find()
      .then((branches) => {
        res.render('index', { parameter: "branches", boxes: branches, imgs: imgs }); //boxes = thing to be dynamically rendered
      });
  });

  app.get('/:coursecode', (req, res) => {
    const { coursecode } = req.params;
    Branch.findOne({ code: coursecode })
      .then((result) => {
        res.render('index', { parameter: "semesters", boxes: result, imgs: imgs });
      });
  });

  app.get('/:coursecode/:sem', (req, res) => {
    const { coursecode } = req.params;
    const { sem } = req.params;
    Branch.findOne({ code: coursecode, semesters: { $elemMatch: { number: sem } } }, { "semesters.subjects": 1, "_id": 0 })
      .then((result) => {
        res.render('index', { parameter: "subjects", branch: coursecode, semNo: sem, boxes: result.semesters[0].subjects, imgs: imgs });
      })
  });

  app.get('/:coursecode/:sem/:sub', (req, res) => {
    const { coursecode } = req.params;
    const { sem } = req.params;
    const { sub } = req.params;
    Branch.findOne({ code: coursecode, semesters: { $elemMatch: { number: sem } } }, { "semesters.subjects": 1, "_id": 0 })
      .then((result) => {
        res.render('index', { parameter: "subjects", branch: coursecode, semNo: sem, boxes: result.semesters[0].subjects, imgs: imgs });
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
