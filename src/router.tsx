import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import RootLayout from "./pages/RootLayout";
import OrderNotFound from "./pages/OrderNotFound";
import MyOrders, { orderLoader } from "./pages/MyOrders";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="" element={<RootLayout />}>
                <Route index={true} element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route
                    path="orders"
                    element={<MyOrders />}
                    loader={orderLoader}
                    errorElement={<OrderNotFound />}
                />
                <Route path="checkout" element={<Checkout />} />
                <Route path="cart" element={<Cart />} />
            </Route>
        </>,
    ),
);
export default router;
