import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { ProductData } from "./types.ts";

export interface CartItem {
  product: ProductData;
  quantity: number;
}

interface StoreState {
  items: CartItem[];
  favoriteProduct: ProductData[];
  addItem: (product: ProductData) => void;
  addToFavorite: (product: ProductData) => Promise<void>;
  // removeItem: (productId: number) => void;
  // deleteCartProduct: (productId: number) => void;
  // resetCart: () => void;
  // getTotalPrice: () => number;
  // getSubTotalPrice: () => number;
  // getItemCount: (productId: number) => number;
  // getGroupedItems: () => CartItem[];
  // // favorite
  // removeFromFavorite: (productId: number) => void;
  // resetFavorite: () => void;
}

// Custom storage to handle SSR and environments where localStorage is blocked
const storage = {
  getItem: async (name: string): Promise<string | null> => {
    if (typeof window === "undefined") return null;
    try {
      return localStorage.getItem(name);
    } catch (e) {
      console.error("LocalStorage access error:", e);
      return null;
    }
  },
  setItem: async (name: string, value: string): Promise<void> => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(name, value);
    } catch (e) {
      console.error("LocalStorage access error:", e);
    }
  },
  removeItem: async (name: string): Promise<void> => {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(name);
    } catch (e) {
      console.error("LocalStorage access error:", e);
    }
  },
};

const useCartStore = create<StoreState>()(
  persist(
    (set, get) => ({
      items: [],
      favoriteProduct: [],
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return { items: [...state.items, { product, quantity: 1 }] };
          }
        }),
      addToFavorite: async (product: ProductData) => {
        set((state: StoreState) => {
          const isFavorite = state.favoriteProduct.some(
            (item) => item.id === product.id
          );
          return {
            favoriteProduct: isFavorite
              ? state.favoriteProduct.filter((item) => item.id !== product.id)
              : [...state.favoriteProduct, { ...product }],
          };
        });
      },
      // removeItem: (productId) =>
      //   set((state) => ({
      //     items: state.items.reduce((acc, item) => {
      //       if (item.product.id === productId) {
      //         if (item.quantity > 1) {
      //           acc.push({ ...item, quantity: item.quantity - 1 });
      //         }
      //       } else {
      //         acc.push(item);
      //       }
      //       return acc;
      //     }, [] as CartItem[]),
      //   })),
      // deleteCartProduct: (productId) =>
      //   set((state) => ({
      //     items: state.items.filter(({ product }) => product?.id !== productId),
      //   })),
      // resetCart: () => set({ items: [] }),
      // getTotalPrice: () => {
      //   return get().items.reduce(
      //     (total, item) => total + (item.product.price ?? 0) * item.quantity,
      //     0
      //   );
      // },
      // getSubTotalPrice: () => {
      //   return get().items.reduce((total, item) => {
      //     const price = item.product.price ?? 0;
      //     const discount = ((item.product.discount ?? 0) * price) / 100;
      //     const discountedPrice = price + discount;
      //     return total + discountedPrice * item.quantity;
      //   }, 0);
      // },
      // getItemCount: (productId) => {
      //   const item = get().items.find((item) => item.product.id === productId);
      //   return item ? item.quantity : 0;
      // },
      // getGroupedItems: () => get().items,

      // removeFromFavorite: (productId: number) => {
      //   set((state: StoreState) => ({
      //     favoriteProduct: state.favoriteProduct.filter(
      //       (item) => item?.id !== productId
      //     ),
      //   }));
      // },
      // resetFavorite: () => {
      //   set({ favoriteProduct: [] });
      // },
    }),
    {
      name: "cart-store",
      // storage: createJSONStorage(() => storage),
    }
  )
);

export default useCartStore;
