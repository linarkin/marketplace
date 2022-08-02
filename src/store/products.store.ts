import axios, { AxiosResponse } from "axios";
import create from "zustand";
import { ProductItemProp } from "types/product";

const baseURL = "/";

interface store {
  products: ProductItemProp[];
  loadingProducts: boolean;
  errorLoadingProducts: boolean;
  getProducts: () => void;
  reset: () => void;
}

const initialState = {
  products: [],
  loadingProducts: false,
  errorLoadingProducts: false,
};

const useProductsStore = create<store>((set, get) => ({
  ...initialState,

  getProducts: () => {
    if (get().products.length === 0) {
      set({
        loadingProducts: true,
      });
      axios
        .get(`${baseURL}marketplace/blocks`)
        .then((resp: AxiosResponse) => {
          const filteredData = resp?.data?.data?.filter(
            (product: ProductItemProp) =>
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
        .catch(() => {
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
