import React from 'react';
import './App.css';
import GridWithClass from './components/GridWithClass';
import DenseAppBar from './components/DenseAppBar';

function App() {
  return (
    <div className="App">
      {DenseAppBar()}
      <GridWithClass />
    </div>
  );
}

export default App;
