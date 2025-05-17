import React from 'react'
import { useCatsStore } from '../stores/catStore';

export const CatBox2 = () => {
    const bigCats = useCatsStore((state) => state.cats.bigCats);
  return (
    <div className="box">
      <h1>Partial States from catStore</h1>
      <p>big cats: {bigCats}</p>
      <p>{Math.random()}</p>
    </div>
  );
};