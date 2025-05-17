import React from 'react';
import { useCatsStore } from '../stores/catStore';

const CatBox = () => {
    const { cats: {
        bigCats,
        smallCats
    } , increaseBigCats, increaseSmallCats, allCats } = useCatsStore();
    
    console.log(allCats());


  return (
    <div className="box">
      <h1>CatBox</h1>
      <p>bigCats: {bigCats}</p>
      <p>smallCats: {smallCats}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>add bigCats</button>
        <button onClick={increaseSmallCats}>add smallCats</button>
      </div>
    </div>
  );
}

export default CatBox