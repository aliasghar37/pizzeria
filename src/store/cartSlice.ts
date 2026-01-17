import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza } from "../data/menu-items";
import { RootState } from "./store";
import { formatPrice } from "../utils/price-utils";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export type CartItem = Pizza & {
    quantity: number;
};
interface CartState {
    items: CartItem[];
}
const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Pizza>) => {
            const matchingItem = state.items.find(
                (existingItem) => existingItem.id === action.payload.id
            );
            if (!matchingItem) {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            } else matchingItem.quantity++;
        },
        removeItem: (state, action: PayloadAction<Pizza>) => {
            const matchingItem = state.items.find(
                (existingItem) => existingItem.id === action.payload.id
            );
            matchingItem!.quantity--;
            if (matchingItem!.quantity === 0) {
                state.items = state.items.filter(
                    (existingItem) => existingItem.id !== matchingItem!.id
                );
            }
        },
        deleteItem: (state, action: PayloadAction<Pizza>) => {
            state.items = state.items.filter(
                (existingItem) => existingItem.id !== action.payload.id
            );
        },
        resetCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, deleteItem, resetCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

// Persisting cartReducer
export default persistReducer({ key: "cart", storage }, cartReducer);

// Selectors
export const selectCartItems = (state: RootState) => {
    return state.cart.items;
};

export const selectItemQuantity = (item: Pizza) => {
    return (state: RootState) => {
        const matchingCartItem = state.cart.items.find((i) => i.id === item.id);
        return matchingCartItem?.quantity || 0;
    };
};

export const selectCartItemsCount = (state: RootState) => {
    return state.cart.items.reduce((acc, next) => acc + next.quantity, 0);
};

export const selectCartItemsTotalAmount = (state: RootState) => {
    const total = state.cart.items.reduce(
        (acc, next) => acc + next.price * next.quantity,
        0
    );
    return formatPrice(total);
};
