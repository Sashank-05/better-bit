import React from 'react'

import Navbar from './components/Navbar';
import JsonNavigator from './components/JsonNavigator'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <JsonNavigator />
      </div>
    </div>
  );
};

export default App;
