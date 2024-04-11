const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8080;

const branches = JSON.parse(fs.readFileSync('db-management/branches.json', 'utf8'));
const imgs = fs.readdirSync("static/images")
app.set('view engine', 'ejs');
app.use(express.static('static'));

const { connection, Branch } = require('./db.js');
connection.once("open", () => {
  console.log("Connected to mongodb via db.js");
  // Load branches and images data

  app.get('/', (req, res) => {
    Branch.find()
      .then((branches) => {
        res.render('index', { branches: branches, imgs: imgs });
      });
  });

  app.get('/:coursecode/semesters', (req, res) => {
    const { coursecode } = req.params;
    res.render('sems', { sems: branches[coursecode] });
  });

  app.get('/:coursecode/semesters/:semester', (req, res) => {
    res.send('Not implemented');
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
