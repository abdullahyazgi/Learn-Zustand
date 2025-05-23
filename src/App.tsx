import React from 'react';
import './App.css';
// import { BearBox } from './components/BearBox';
import CatBox from './components/CatBox';
import { CatBox2 } from './components/CatBox2';
import { CatController } from "./components/CatController";

function App() {
  return (
    <div className="container">
      <h1>Zustand</h1>
      <div>
        {/* <BearBox /> */}
        <CatBox />
        <CatBox2 />
        <CatController />
      </div>
    </div>
  );
}

export default App;
