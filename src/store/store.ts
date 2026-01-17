import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import ordersReducer from "./orderSlice";
import { persistStore } from "redux-persist";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        orders: ordersReducer,
    },
    middleware: (defaultMiddleware) => {
        return defaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        });
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
