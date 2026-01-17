import "react-credit-cards-2/dist/es/styles-compiled.css";
import BackBtn from "../components/BackBtn";
import CreditCard from "../components/CreditCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
    resetCart,
    selectCartItems,
    selectCartItemsTotalAmount,
} from "../store/cartSlice";
import { formatPrice } from "../utils/price-utils";
import { createOrder } from "../store/orderSlice";
import { createOrderId } from "../utils/order-utils";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const cartItems = useAppSelector(selectCartItems);
    const total = useAppSelector(selectCartItemsTotalAmount);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div className="mt-6 max-w-4xl mx-auto min-h-[90vh] pb-4 ">
            <BackBtn to={"/cart"}>Back to cart</BackBtn>
            <h1 className="text-secondary font-semibold text-5xl text-center">
                Checkout
            </h1>
            {cartItems.length ? (
                <div className="grid grid-cols-1 mt-4 p-4 md:grid-cols-2 gap-8 card border-2 border-borderColor text-black shadow-lg mx-2 ">
                    <section>
                        <h2 className="text-2xl w-full text-center mb-4 card-title block">
                            Order Summary
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-black">
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.title}</td>
                                                <td>{item.quantity}</td>
                                                <td>
                                                    {formatPrice(
                                                        item.price *
                                                            item.quantity
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    <tr className="font-semibold">
                                        <td>Subtotal: </td>
                                        <td></td>
                                        <td>Rs: {formatPrice(total)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="max-w-sm">
                        <h2 className="text-2xl mb-4 card-title w-full block text-center">
                            Payment Details
                        </h2>
                        <CreditCard
                            submitHandler={(state) => {
                                const orderId = createOrderId();

                                dispatch(
                                    createOrder({
                                        id: orderId,
                                        items: cartItems,
                                        total: total,
                                        cardNum: state.number,
                                        state: "pending",
                                        time: Date.now(),
                                    })
                                );
                                navigate(`/orders`);
                                dispatch(resetCart());
                            }}
                        />
                    </section>
                </div>
            ) : (
                <h3 className="text-2xl text-center text-black ">
                    No items in the cart
                </h3>
            )}
        </div>
    );
};

export default Checkout;
