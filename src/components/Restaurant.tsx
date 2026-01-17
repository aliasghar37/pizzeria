import FoodCard from "./FoodCard";
import { MENU_ITEMS } from "../data/menu-items";
import withQuantity from "./withQuantity";

const QuantifiedMenuItem = withQuantity(FoodCard);

interface RestaurantProps {
    limit?: "home" | "menu";
}

const Restaurant = ({ limit }: RestaurantProps) => {
    return (
        <div className="py-8">
            <div>
                {limit === "home" ? (
                    <h1 className="text-black text-5xl text-center max-sm:text-4xl ">
                        Our popular{" "}
                        <span className="text-secondary font-semibold">
                            dishes
                        </span>
                    </h1>
                ) : (
                    <h1 className="text-secondary font-semibold text-5xl text-center">
                        Menu items
                    </h1>
                )}

                {/* Restaurant*/}
                <div className="grid grid-cols-3 gap-4 w-[80%] justify-self-center my-10 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 ">
                    {/* Card */}

                    {limit === "home"
                        ? MENU_ITEMS.slice(0, 6).map((item) => {
                              return <QuantifiedMenuItem item={item} />;
                          })
                        : MENU_ITEMS.map((item) => {
                              return <QuantifiedMenuItem item={item} />;
                          })}
                </div>
            </div>
        </div>
    );
};
export default Restaurant;
