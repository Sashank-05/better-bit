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

  const handleBack = () => {
    if (path.length > 1) {
      const newPath = path.slice(0, path.length - 1);
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

  const renderBreadcrumbs = () => {
    return (
      <div className="mb-4">
        {path.map((crumb, index) => (
          <span key={index}>
            <button
              onClick={() => {
                const newPath = path.slice(0, index + 1);
                setPath(newPath);
                navigateTo(newPath);
              }}
              className="text-blue-400 hover:underline"
            >
              {crumb}
            </button>
            {index < path.length - 1 && ' > '}
          </span>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    if (path.length === 1) {
      return (
        <>
          <h2 className="text-xl mb-2">BRANCHES:</h2>
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
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        {path.length > 1 && (
          <button
            onClick={handleBack}
            className="bg-gray-700 text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition mb-4"
          >
            Back
          </button>
        )}
        {renderBreadcrumbs()}
        <div className="flex flex-col gap-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default JsonNavigator;
