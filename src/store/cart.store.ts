import create from "zustand";
import { persist } from "zustand/middleware";
import { ProductItemProp } from "types/product";

interface store {
  cart: any;
  cartCount: number;
  addItemToCart: (item: any) => void;
  removeFromCart: (item: any, removeItem?: boolean) => void;
  emptyCart: () => void;
  reset: () => void;
}

const initialState = {
  cart: [],
  cartCount: 0,
};

const useCartStore = create(
  persist<store>(
    (set) => ({
      ...initialState,
      emptyCart: () => {
        set({ cart: [], cartCount: 0 });
      },
      addItemToCart: (product: ProductItemProp) => {
        set((state) => {
          const isPresent = state.cart.find(
            (productItem: ProductItemProp) => productItem.id === product.id
          );

          if (!isPresent) {
            const productWithQuantity = { ...product, quantity: 1 };
            return {
              ...state,
              cart: [...state.cart, productWithQuantity],
              cartCount: state.cartCount + 1,
            };
          }

          const updatedCart = state.cart.map((productItem: ProductItemProp) =>
            productItem.id === product.id
              ? { ...productItem, quantity: productItem.quantity + 1 }
              : productItem
          );

          const updatedCartCount = updatedCart.reduce(
            (sum: number, currentValue: ProductItemProp) => {
              return (sum += currentValue.quantity);
            },
            0
          );

          return {
            ...state,
            cart: updatedCart,
            cartCount: updatedCartCount,
          };
        });
      },
      removeFromCart: (id: number, removeItem?: boolean) =>
        set((state) => {
          const updatedCart = state.cart
            .map((productItem: any) =>
              productItem.id === id
                ? {
                    ...productItem,
                    quantity: removeItem
                      ? 0
                      : Math.max(productItem.quantity - 1, 0),
                  }
                : productItem
            )
            .filter((productItem: any) => productItem.quantity);

          const updatedCartCount = updatedCart.reduce(
            (sum: number, currentValue: ProductItemProp) => {
              return (sum += currentValue.quantity);
            },
            0
          );

          return {
            ...state,
            cart: updatedCart,
            cartCount: updatedCartCount,
          };
        }),
      reset: () => {
        set({ ...initialState });
      },
    }),
    {
      name: "cartStore",
    }
  )
);

export default useCartStore;
