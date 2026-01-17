import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    selectCartItemsCount,
    selectCartItemsTotalAmount,
} from "../store/cartSlice";

const Header = () => {
    const totalItems = useSelector(selectCartItemsCount);
    const totalAmount = useSelector(selectCartItemsTotalAmount);

    return (
        <div className="navbar flex justify-between bg-accent text-secondary sticky top-0 z-[11000] gap-4 px-4 drop-shadow-sm">
            <Link to={"/"} className=" text-xl">
                <img
                    src="/images/pizzeria-logo.png"
                    alt="Pizzeria Logo"
                    className="h-12"
                />
            </Link>

            <div className="flex gap-2  ">
                <Link
                    to={"/orders"}
                    role="button"
                    className="justify-items-center btn btn-ghost btn-circle "
                    title="Your orders"
                >
                    <div className=" w-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L12.0001 10.8444L18.5062 7.07774L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329ZM13.0001 20.11L19.5 16.3469V8.81337L13.0001 12.5765V20.11Z"></path>
                        </svg>
                    </div>
                </Link>
                {totalAmount === 0 ? (
                    ""
                ) : (
                    <div className="font-semibold gap-1 flex">
                        <span className="hidden md:flex">Cart total: </span>
                        <span>Rs {totalAmount}</span>{" "}
                    </div>
                )}

                <Link
                    to="/cart"
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                    title="Cart"
                >
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <span className="badge badge-sm indicator-item bg-secondary border-accent text-accent">
                            {totalItems}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
