import React from 'react';
import OpponentsPanel from '../opponentsPanel/opponentsPanel';
import CommonGameArea from '../commonGameArea/commonGameArea';
import './App.css';

function App() {
  return (
    <div className="app">
      <OpponentsPanel />
      <CommonGameArea />
    </div>
  );
}

export default App;
