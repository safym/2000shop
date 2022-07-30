// import modules
import { NavLink } from "react-router-dom";

// import icons
import { RiShoppingBag2Fill } from "react-icons/ri";


const CartLink = (prop) => {
    return (
        <NavLink className="linkCart" role="button" to={prop.href}>
            <RiShoppingBag2Fill />
        </NavLink>
    );
}
export default CartLink;  