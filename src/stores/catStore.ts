import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { createSelectors } from "../utils/createSelector";


type TCatStoreState = {
  cats: {
      bigCats: number;
      smallCats: number;
    };
      increaseBigCats: () => void;
      increaseSmallCats: () => void;
      allCats: () => void;
};

export const useCatsStore = createSelectors(
  create<TCatStoreState>()(
    immer((set, get) => ({
      cats: {
        bigCats: 0,
        smallCats: 0,
      },
      increaseBigCats: () =>
        set((state) => {
          state.cats.bigCats++;
        }),
      increaseSmallCats: () =>
        set((state) => {
          state.cats.smallCats++;
        }),
      allCats: () => {
        const total = get().cats.bigCats + get().cats.smallCats;
        return `There are ${total} cats in total`;
      },
    }))
  )
);