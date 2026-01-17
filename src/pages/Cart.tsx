import { Link } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import { useAppSelector } from "../store/hooks";
import {
    selectCartItems,
    selectCartItemsTotalAmount,
} from "../store/cartSlice";
import MenuItem from "../components/MenuItem";

const Cart = () => {
    const cartItems = useAppSelector(selectCartItems);
    const totalPrice = useAppSelector(selectCartItemsTotalAmount);

    return (
        <div className="text-center mt-6 max-w-4xl mx-auto min-h-[90vh] pb-12 ">
            <BackBtn to={"/menu"}>Back to menu</BackBtn>
            <h1 className="text-secondary font-semibold text-5xl text-center ">
                Cart
            </h1>
            {cartItems.length ? (
                <>
                    <ul className="my-4 w-full flex flex-col gap-4">
                        {cartItems.map((item) => {
                            return (
                                <li key={item.id}>
                                    <MenuItem item={item} />
                                </li>
                            );
                        })}{" "}
                    </ul>
                    <div className="flex text-2xl px-4 py-2 w-full font-semibold items-center justify-between text-black">
                        <span>Total price</span>
                        <span className="text-black ">Rs: {totalPrice}</span>
                    </div>
                    <Link to={"/checkout"} className="btn btn-secondary mt-4 text-md w-44">
                        Checkout
                    </Link>
                </>
            ) : (
                <h3 className="text-2xl text-black ">No items in the cart</h3>
            )}
        </div>
    );
};

export default Cart;
