const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/betterbitDB");

const noteSchema = {
  noteTitle: String,
  noteUrl: String,
}
const Note = mongoose.model("Note", noteSchema);
const moduleSchema = {
  name: String,
  number: Number,
  notes: [noteSchema], //Array of notes
}
const Module = mongoose.model("Module", moduleSchema);

const subjectSchema = {
  code: String,
  name: String,
  modules: [moduleSchema], //Array of modules
}
const Subject = mongoose.model("Subject", subjectSchema);

const semesterSchema = {
  name: String,
  number: Number,
  subjects: [subjectSchema]
}
const Semester = mongoose.model("Semester", semesterSchema);

const branchSchema = {
  name: String,
  code: String,
  semesters: [semesterSchema]
}
const Branch = mongoose.model("Branch", branchSchema);

//Temperory offline mongodb database
//Will be directly uploaded in Atlas when deployment time
const branches = [
  {
    code: "CD",
    name: "Data Science",
    semesters: [{
      name: "Chemistry Cycle",
      number: 2,
      subjects: [{
        code: "BMATS201",
        name: "Mathematics - II for CSE stream",
        modules: [
          {
            name: "Integral Calculus",
            number: 1,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
          {
            name: "Vector Calculus",
            number: 2,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
          {
            name: "Vector Space and Linear Transformations",
            number: 3,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
          {
            name: "Numerical Methods",
            number: 4,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
          {
            name: "Numerical Methods",
            number: 5,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
        ]
      },
      {
        code: "BCHES202",
        name: "Chemistry for CSE stream",
        modules: [
          {
            name: "Sensors and Energy Systems",
            number: 1,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
          {
            name: "Materials for Memory and Display Systems",
            number: 2,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
          {
            name: "Corrosion and Electrode System",
            number: 3,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
          {
            name: "Polymers and Green fuels",
            number: 4,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
          {
            name: "Waste Management",
            number: 5,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
        ]
      },
      {
        code: "BCEDK203",
        name: "Computer Aided Engineering Drawing",
        modules: [
          {
            name: "Orthographic Projections of Points, Lines and Planes",
            number: 1,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
          {
            name: "Orthographic Projection of Solids",
            number: 2,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
          {
            name: "Isometric Projections",
            number: 3,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
          {
            name: "Development of Lateral Surfaces of Solids",
            number: 4,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
          {
            name: "Multidisciplinary Applications & Practice",
            number: 5,
            notes: [{ noteTitle: "Source1", noteUrl: "www.google.com" }, { noteTitle: "Source2", noteUrl: "www.google.com" }, { noteTitle: "Source3", noteUrl: "www.google.com" }, { noteTitle: "Source4", noteUrl: "www.google.com" }],
          },
        ]
      },]
    }]
  }
]

// Checking if branches or semesters exist in local database before adding them
mongoose.connection.listCollections() //Shows collections in a database
  .then((result) => {

    doesBranchesExist = result.some((collection) => collection.name == "branches");

    if (!doesBranchesExist) {
      Branch.insertMany(branches)
        .then(function() {
          console.log("Branches collection inserted"); // Success

          Branch.find()
            .then((result) => { console.log("Created Branch Collection ->", result) });
        })

    } else {
      Branch.find()
        .then((result) => { console.log("Existing Branch Collection ->", result) });
      console.log("Branches collection exists");
    }
  });

module.exports = {
  connection: mongoose.connection,
  Branch,
}
