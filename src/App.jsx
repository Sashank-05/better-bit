import React from 'react';
import Navbar from './components/Navbar';
import JsonNavigator from './components/JsonNavigator';

const App = () => {
  return (
    <div className="app h-screen overflow-hidden flex flex-col bg-gray-900">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <JsonNavigator />
      </div>
    </div>
  );
};

export default App;
