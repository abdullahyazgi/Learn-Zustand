// import { shallow } from "zustand/shallow";
import { useCatsStore } from '../stores/catStore';


export const CatController = () => {
    // const { increaseBigCats, increaseSmallCats } = useCatsStore();
    const increaseBigCats = useCatsStore.use.increaseBigCats();
    const increaseSmallCats = useCatsStore.use.increaseSmallCats();

    // const { increaseBigCats, increaseSmallCats } = useCatsStore(
    //   (state) => ({
    //     increaseBigCats: state.increaseBigCats,
    //     increaseSmallCats: state.increaseSmallCats,
    //   }),
    //   shallow
    // );

    // const { increaseBigCats, increaseSmallCats } = useCatsStore(
    //   (state) => [state.increaseBigCats, state.increaseSmallCats],
    //   shallow
    // );
    
  return (
    <div className='box'>
      <h1>Cat Controller</h1>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  );
};
