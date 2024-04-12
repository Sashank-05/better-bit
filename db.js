import mongoose from "mongoose";

async function connectToMongoDB() {
  try {
    await mongoose.connect("mongodb+srv://sashankvanka:Ss123123@cluster0.s3vidts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongoDB()
const branchSchema = {
  name: String,
  code: String,
  semesters: Object,
};

const Branch = mongoose.model("Branch", branchSchema);

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

const findBranch = async (coursecode) => {
  const branches = await Branch.find();
  return branches.find((branch) => branch.code === coursecode);
};

const findSemester = async (coursecode, sem) => {
  const branch = await findBranch(coursecode);
  const semester = branch.semesters.find((semester) => semester.number === sem);
  return semester;
};

const findSubject = async (coursecode, sem, sub) => {
  const semester = await findSemester(coursecode, sem);
  const subject = semester.subjects.find((subject) => subject.code === sub);
  return subject;
};

mongoose.connection.listCollections().then((result) => {
  const doesBranchesExist = result.some((collection) => collection.name === "branches");

  if (!doesBranchesExist) {
    Branch.insertMany(branches)
      .then(() => {
        console.log("Branches collection inserted");
      })
      .catch((error) => {
        console.error("Error inserting branches collection:", error);
      });
  } else {
    console.log("Branches collection exists");
  }
  
});


export default {
  connection: mongoose.connection,
  Branch,
  findSemester,
  findBranch,
  findSubject,
};