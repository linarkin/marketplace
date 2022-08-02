import axios from "axios";
import create from "zustand";

const baseURL = "/";

interface store {
  products: any;
  loadingProducts: boolean;
  errorLoadingProducts: boolean;
  getProducts: () => any;
  reset: () => void;
}

const initialState = {
  products: [],
  loadingProducts: false,
  errorLoadingProducts: false,
};

const useProductsStore = create<store>((set, get, state) => ({
  ...initialState,

  getProducts: () => {
    if (get().products.length === 0) {
      set({
        loadingProducts: true,
      });
      axios
        .get(`${baseURL}marketplace/blocks`)
        .then((resp: any) => {
          const filteredData = resp?.data?.data?.filter(
            (product: any) =>
              product?.metadata?.blockPricingStrategy?.name === "simple"
          );
          filteredData &&
            set({
              products: filteredData,
              errorLoadingProducts: false,
            });
          set({
            loadingProducts: false,
          });
        })
        .catch((error: Error) => {
          set({
            loadingProducts: false,
            errorLoadingProducts: true,
          });
        });
    }
  },
  reset: () => {
    set({ ...initialState });
  },
}));

export default useProductsStore;
