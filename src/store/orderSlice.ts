import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export type Order = {
    id: string;
    items: CartItem[];
    total: number;
    cardNum: string;
    state: "ready" | "pending";
    time: number;
};
interface OrderState {
    items: Order[];
}

const initialState: OrderState = { items: [] };

export const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        createOrder: (state, action: PayloadAction<Order>) => {
            const lastFour = action.payload.cardNum.slice(-4);
            action.payload.cardNum =
                action.payload.cardNum
                    .split(" ")
                    .join("")
                    .slice(0, -4)
                    .replace(/./g, "*") + lastFour;
            action.payload.time = Date.now();

            state.items.unshift(action.payload);
        },
        deleteOrder: (state, action: PayloadAction<{ id: string }>) => {
            state.items = state.items.filter(
                (item) => action.payload.id !== item.id
            );
        },
    },
});

export const { createOrder, deleteOrder } = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;

export default persistReducer(
    { key: "orders", storage: storage },
    ordersReducer
);
