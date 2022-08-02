import create from "zustand";
import { persist } from "zustand/middleware";

interface store {
  credits: number;
  removeCredits: (totalPrice: number) => any;
  reset: () => void;
}

const initialState = {
  credits: 10000,
};

const useCreditsStore = create(
  persist<store>(
    (set, get, state) => ({
      ...initialState,
      removeCredits: (totalPrice: number) => {
        set((state) => {
          return {
            credits:
              totalPrice <= state.credits
                ? state.credits - totalPrice
                : state.credits,
          };
        });
      },
      reset: () => {
        set({ ...initialState });
      },
    }),
    {
      name: "creditsStore",
    }
  )
);

export default useCreditsStore;
