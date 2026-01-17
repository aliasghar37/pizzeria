import MenuItem from "../components/MenuItem";
import { MENU_ITEMS } from "../data/menu-items";
import withQuantity from "../components/withQuantity";
import Restaurant from "../components/Restaurant";

const QuantifiedMenuItem = withQuantity(MenuItem);

// const Menu = () => {
//     return (
//         <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl text-center my-4">
//                 Pick what you crave for today
//             </h2>
//             <ul className="flex w-full flex-col gap-4">
//                 {MENU_ITEMS.map((item) => {
//                     return <QuantifiedMenuItem key={item.id} item={item}  />;
//                 })}
//             </ul>
//         </div>
//     );
// };

const Menu = () => {
    return (
        <div className="bg-white ">
            <Restaurant limit="menu" />
        </div>
    );
};

export default Menu;
