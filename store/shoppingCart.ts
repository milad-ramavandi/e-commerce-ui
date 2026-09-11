import { ICart, IUseShoppingCart } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useShoppingCart = create<IUseShoppingCart>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product: ICart) =>
        set((state) => {
          if (
            state.cart.some(
              (item) =>
                (item.id === product.id &&
                item.selectedColor === product.selectedColor &&
                item.selectedSize === product.selectedSize)
            )
          ) {
            return {
              cart: [
                ...state.cart.filter(
                  (item) =>
                    !(item.id === product.id &&
                    item.selectedColor === product.selectedColor &&
                    item.selectedSize === product.selectedSize)
                ),
                { ...product, quantity: Number(product.selectedQuantity) + 1 },
              ],
            };
          } else {
            return { cart: [...state.cart, product] };
          }
        }),
      removeFromCart: (product: ICart) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              !(item.id === product.id &&
              item.selectedColor === product.selectedColor &&
              item.selectedSize === product.selectedSize)
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart"},
  ),
);

export default useShoppingCart;
