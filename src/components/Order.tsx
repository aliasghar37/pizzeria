import MenuItem from "./MenuItem";
import { CartItem } from "../store/cartSlice";
import { type Order } from "../store/orderSlice";

interface OrderProp {
    order: Order;
}

const Order = (o: OrderProp) => {
    const { order } = o;
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const date = new Date(order.time);
    const createdAt = `${
        months[date.getMonth()]
    } ${date.getDate()}, ${date.getHours()}:${date.getMinutes()} `;

    return (
        <>
            <div className="my-6 max-w-4xl  border-2 rounded-md text-black mx-2 ">
                <h2 className="text-3xl text-center my-4">
                    Order #{order.id}:
                </h2>
                <div className="card px-4">
                    <div className="card-body gap-8">
                        <div className="mx-5 card-title">Items</div>
                        {order.items.map((item: CartItem) => {
                            return (
                                <MenuItem
                                    key={item.id}
                                    readonly={true}
                                    item={item}
                                />
                            );
                        })}
                        <div className="card-title mx-5 text-start flex justify-between">
                            <span>Total:</span> <span>Rs: {order.total}</span>
                        </div>
                        <div className="card-title mx-5 text-start flex justify-between">
                            <span>Paid with:</span> <span>{order.cardNum}</span>
                        </div>
                        <div className="card-title mx-5 flex justify-between text-start">
                            <span>Created at:</span>{" "}
                            <span>{`${createdAt}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
