import React, { useState } from 'react';

const jsonData = {
  Branches: {
    "Computer Science Engineering": {
      Semesters: {
        1: {
          "Module Wise Notes": ["Module 1", "Module 2", "Module 3", "Module 4"],
          "Books": ["Book 1", "Book 2", "Book 3"],
          "Previous Year Papers": ["2019", "2020", "2021"],
          "Syllabus": ["Syllabus"],
        },
        2: {
          "Module Wise Notes": ["Module 1", "Module 2", "Module 3", "Module 4"],
          "Books": ["Book 1", "Book 2", "Book 3"],
          "Previous Year Papers": ["2019", "2020", "2021"],
          "Syllabus": ["Syllabus"],
        },
      },
    },
    "CSE (DS)": {
      Semesters: {
        1: {
          "Module Wise Notes": ["Module 1", "Module 2", "Module 3", "Module 4"],
          "Books": ["Book 1", "Book 2", "Book 3"],
          "Previous Year Papers": ["2019", "2020", "2021"],
          "Syllabus": ["Syllabus"],
        },
        2: {
          "Module Wise Notes": ["Module 1", "Module 2", "Module 3", "Module 4"],
          "Books": ["Book 1", "Book 2", "Book 3"],
          "Previous Year Papers": ["2019", "2020", "2021"],
          "Syllabus": ["Syllabus"],
        },
      },
    },
  },
};

const JsonNavigator = () => {
  const [currentData, setCurrentData] = useState(jsonData.Branches);
  const [path, setPath] = useState(['Branches']);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');

  const handleBack = () => {
    if (path.length > 1) {
      let newPath = path.slice(0, path.length - 1);
      if (newPath.length === 2 && Object.keys(jsonData.Branches[newPath[1]]).length === 1) {
        newPath = ['Branches'];
      }
      setPath(newPath);
      navigateTo(newPath);
    }
  };

  const navigateTo = (newPath) => {
    let data = jsonData;
    newPath.forEach((key) => {
      data = data[key];
    });
    setCurrentData(data);
  };

  const isLeafNode = (data) => {
    return typeof data !== 'object' || Array.isArray(data);
  };

  const handleSubmit = () => {
    if (selectedBranch && selectedSemester) {
      const newPath = ['Branches', selectedBranch, 'Semesters', selectedSemester];
      setPath(newPath);
      navigateTo(newPath);
    }
  };

  const renderContent = () => {
    if (path.length === 1) {
      return (
        <>
          {Object.keys(currentData).map((key) => (
            <button
              key={key}
              onClick={() => {
                const newPath = [...path, key];
                setPath(newPath);
                navigateTo(newPath);
              }}
              className="border-2 border-gray-700 text-lg text-gray-300 rounded-lg p-4 transition transform hover:bg-gray-700 hover:text-white hover:scale-105 focus:outline-none"
            >
              {key}
            </button>
          ))}
        </>
      );
    } else if (path.length === 2 && Object.keys(currentData).length === 1) {
      const singleKey = Object.keys(currentData)[0];
      const newPath = [...path, singleKey];
      setPath(newPath);
      navigateTo(newPath);
    } else if (path.length === 4) {
      return (
        <div className="flex gap-4 w-full h-full">
          <div className="w-1/4 bg-gray-700 p-4 rounded-lg">
            {Object.keys(currentData).map((key) => (
              <div key={key} className="mb-2">
                <button
                  onClick={() => {
                    if (isLeafNode(currentData[key])) {
                      alert(JSON.stringify(currentData[key], null, 2));
                    } else {
                      const newPath = [...path, key];
                      setPath(newPath);
                      navigateTo(newPath);
                    }
                  }}
                  className="text-left w-full text-lg text-gray-300 rounded-lg p-2 transition transform hover:bg-gray-600 hover:text-white focus:outline-none"
                >
                  {key}
                </button>
              </div>
            ))}
          </div>
          <div className="w-3/4 bg-gray-800 p-4 rounded-lg">
            {Object.keys(currentData).map((key) => (
              <div key={key} className="mb-2">
                <button
                  onClick={() => {
                    if (isLeafNode(currentData[key])) {
                      alert(JSON.stringify(currentData[key], null, 2));
                    } else {
                      const newPath = [...path, key];
                      setPath(newPath);
                      navigateTo(newPath);
                    }
                  }}
                  className="text-left w-full text-lg text-gray-300 rounded-lg p-2 transition transform hover:bg-gray-600 hover:text-white focus:outline-none"
                >
                  {key}
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <>
          {Object.keys(currentData).map((key) => (
            <button
              key={key}
              onClick={() => {
                if (isLeafNode(currentData[key])) {
                  alert(JSON.stringify(currentData[key], null, 2));
                } else {
                  const newPath = [...path, key];
                  setPath(newPath);
                  navigateTo(newPath);
                }
              }}
              className="border-2 border-gray-700 text-lg text-gray-300 rounded-lg p-4 transition transform hover:bg-gray-700 hover:text-white hover:scale-105 focus:outline-none"
            >
              {key}
            </button>
          ))}
        </>
      );
    }
  };

  return (
    <div className={`bg-gray-800 p-6 rounded-2xl shadow-lg ${path.length < 4 ? 'w-1/2 h-1/2 flex flex-col items-center justify-center' : 'w-full h-full'}`}>
      <div className="flex flex-col mb-4 gap-4 w-full">
        <div className="flex gap-4">
          <div className="flex-none">
            <label className="block text-gray-300 mb-2">Branch</label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="bg-gray-700 text-white py-1 px-2 rounded shadow hover:bg-gray-600 transition"
            >
              <option value="" disabled>Select Branch</option>
              {Object.keys(jsonData.Branches).map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-none">
            <label className="block text-gray-300 mb-2">Semester</label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="bg-gray-700 text-white py-1 px-2 rounded shadow hover:bg-gray-600 transition"
              disabled={!selectedBranch}
            >
              <option value="" disabled>Select Semester</option>
              {selectedBranch &&
                Object.keys(jsonData.Branches[selectedBranch].Semesters).map((semester) => (
                  <option key={semester} value={semester}>
                    {semester}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex-none flex items-end">
            <button
              onClick={handleSubmit}
              className={`bg-blue-500 text-white py-1 px-2 rounded shadow transition ${!selectedBranch || !selectedSemester ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-400'}`}
              disabled={!selectedBranch || !selectedSemester}
            >
              Submit
            </button>
          </div>
        </div>
        {path.length > 1 && (
          <button
            onClick={handleBack}
            className="bg-gray-700 text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition self-start"
          >
            Back
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4 w-full">
        {renderContent()}
      </div>
    </div>
  );
};

export default JsonNavigator;
