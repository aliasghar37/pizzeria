import { addItem, CartItem, deleteItem, removeItem } from "../store/cartSlice";
import { useAppDispatch } from "../store/hooks";

export type MenuItemProps = {
    item: CartItem;
    readonly?: boolean;
};

export default ({ item, readonly }: MenuItemProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className="relative w-full p-4 rounded-lg border-2 border-borderColor hover:bg-accent group">
            {/* thumbnail */}
            <div className="relative w-full h-60 overflow-hidden rounded-md">
                <img
                    src={`images/pizzas/${item.image}`}
                    alt="Pizza"
                    className="w-full h-full object-cover rounded-[0.25rem] transition-transform duration-700 ease-[cubic-bezier(0.36,-0.21,0.16,1.97)]
            group-hover:scale-110 
            "
                />
            </div>
            <div className="mt-8  relative text-black">
                <h3 className="capitalize font-semibold text-xl mt-4 ">
                    {item.title}
                </h3>
                <p className="opacity-70 overflow-hidden whitespace-nowrap overflow-ellipsis mt-1 ">
                    {item.ingredients}
                </p>
                <p className="font-semibold text-lg mt-2">Rs: {item.price}</p>
                {item.quantity === 0 ? (
                    <button
                        className="bg-secondary px-2 py-1 rounded-md text-white flex place-self-end absolute"
                        onClick={() => dispatch(addItem(item))}
                    >
                        Add to cart
                    </button>
                ) : (
                    <div className="flex gap-2 items-center place-self-end absolute">
                        {
                            <button
                                className=" bg-secondary rounded-full h-8 w-8 place-items-center text-white "
                                onClick={() => dispatch(removeItem(item))}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        }
                        <span>{`${item.quantity}`}</span>
                        {!readonly && (
                            <>
                                <button
                                    className=" bg-secondary rounded-full h-8 w-8 place-items-center text-white "
                                    onClick={() => dispatch(addItem(item))}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="bg-secondary px-2 py-1 rounded-md text-white "
                                    onClick={() => dispatch(deleteItem(item))}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6 md:hidden block"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                    </svg>

                                    <span className="hidden md:block">
                                        Delete
                                    </span>
                                </button>{" "}
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
