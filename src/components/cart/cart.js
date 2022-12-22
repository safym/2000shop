//import modules
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// import components
import CartFooter from "./cartFooter";

const Cart = (props) => {
  let currentCart = JSON.parse(localStorage.getItem("cart"));

  let [cart, setCart] = useState(currentCart);

  let finalCart = [];
  let totalCoast = 0;

  const deleteCartItem = (event) => {
    let selectedID = event.target.id.replace("delete_CartItem", "");

    finalCart = cart.filter(function (currentCartItem) {
      return currentCartItem.ID !== Math.floor(selectedID);
    });

    setCart(finalCart);
    localStorage.setItem("cart", JSON.stringify(finalCart));
  };

  for (let i = currentCart.length - 1; i >= 0; i--) {
    finalCart.push(
      <div
        key={"itemWrapper" + currentCart[i].ID}
        className="cartItem"
        id={"cartItem" + currentCart[i].ID}
      >
        <NavLink
          className="itemSectionGeneral"
          key={"link" + currentCart[i].ID}
          to={"/products/" + currentCart[i].ID}
        >
          <img
            key={"itemImg" + currentCart[i].ID}
            className="cartItemImage"
            src={require("../../img/catalog/" + currentCart[i].Image)}
          />
          <h1 className="cartItemName" key={"itemName" + currentCart[i].ID}>
            {currentCart[i].Name}
          </h1>
        </NavLink>

        <div className="itemSectionInfo" key={"itemInfo" + currentCart[i].ID}>
          <h1 className="cartItemQuantity" key={"quantity" + currentCart[i].ID}>
            ×{currentCart[i].Quantity}
          </h1>
          <h1 className="cartItemPrice" key={"price" + currentCart[i].ID}>
            {currentCart[i].Price} $
          </h1>
          <button
            className="deleteCartItem"
            id={"delete_CartItem" + currentCart[i].ID}
            onClick={deleteCartItem}
            key={"delete" + currentCart[i].ID}
          >
            ×
          </button>
        </div>
      </div>
    );
    finalCart.push(<hr className="styledBorderline" />);

    totalCoast = totalCoast + currentCart[i].Price;
  }
  return (
    <div className="Content">
      <div className="cartItems">
        {finalCart}
        <CartFooter totalCoast={totalCoast} auth={props.auth} />
      </div>
    </div>
  );
};

export default Cart;
