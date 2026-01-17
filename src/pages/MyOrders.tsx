import { useLoaderData } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import { store } from "../store/store";
import { onStoreReady } from "../utils/on-store-ready";
import { Order as Iorder } from "../store/orderSlice";
import Order from "../components/Order";

export const orderLoader = async () => {
    await onStoreReady();
    const { items } = store.getState().orders;
    return items;
};

const MyOrders = () => {
    const orders = useLoaderData() as Iorder[];

    return (
        <div className="max-w-4xl mx-auto text-center mt-6 min-h-[90vh] pb-12  ">
            <BackBtn to={"/menu"}>Back to menu</BackBtn>
            <h1 className=" text-secondary font-semibold text-5xl text-center  ">
                Your Orders
            </h1>
            {orders.length > 0 ? (
                orders?.map((o: Iorder) => {
                    return <Order key={o.id} order={o} />;
                })
            ) : (
                <h3 className="text-2xl text-black ">You have no orders</h3>
            )}
        </div>
    );
};

export default MyOrders;
