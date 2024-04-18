import express from 'express';
import fs from 'fs';
import {connection, Branch, findBranch, findSemester, findSubject} from './db.js';

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.static('static'));

const imgs = fs.readdirSync("static/images");

const generatePath = (params) => {
    const pathParams = Object.values(params).join('/');
    return `${pathParams}`;
};

connection.once("open", () => {

    console.log("Connected to mongodb via db.js");
    app.get('/', (req, res) => {

        console.log(Branch);
        Branch.find()
            .then((branches) => {
                res.render('index', {parameter: "branches", boxes: branches, imgs: imgs});
            });
    });


    app.get('/:coursecode', (req, res) => {
        const {coursecode} = req.params;
        findBranch(coursecode)
            .then(branch => {
                res.render('index', {url: generatePath(req.params), parameter: "semesters", boxes: branch, imgs: imgs});
            });
    });

    app.post("/:coursecode", (req, res) => {
        const {coursecode} = req.params;
        findBranch(coursecode)
            .then(branch => {
                res.json({url: generatePath(req.params), boxes: branch});
            });
    });

    app.get('/:coursecode/:sem', (req, res) => {
        const {coursecode, sem} = req.params;
        findSemester(coursecode, Number(sem))
            .then((semester) => {
                res.render('index', {
                    url: generatePath(req.params),
                    parameter: "subjects",
                    boxes: semester,
                    imgs: imgs
                });
            });
    });

    app.get('/:coursecode/:sem/:sub', (req, res) => {
        const {coursecode, sem, sub} = req.params;
        //returns the modules of the path specified ex: CD/2/BMATS201/
        findSubject(coursecode, Number(sem), sub)
            .then((subject) => {
                res.render('index', {url: generatePath(req.params), parameter: "modules", boxes: subject, imgs: imgs});
            });
    });

    app.get('/login', (req, res) => {
        res.render('login');
    });

    app.get('/signup', (req, res) => {
        res.status(503).send('Not implemented');
    });

    app.get('/admin', (req, res) => {
        res.render('admin', {result: null});
    });

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

export default app;
