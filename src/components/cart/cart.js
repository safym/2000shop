//import modules
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// import components
import CartFooter from "./cartFooter";

const Cart = (props) => {
  let currentCart = JSON.parse(localStorage.getItem("cart"));

  let [cart, setCart] = useState(currentCart);

  let finalCart = [];
  let totalCoast = 0;

  console.log(currentCart);

  const deleteCartItem = (event) => {
    console.log(event);
    let selectedID = event.target.id.replace("delete_CartItem", "");

    finalCart = cart.filter(function (currentCartItem) {
      console.log(currentCartItem.ID);
      console.log(selectedID);
      return currentCartItem.ID !== Math.floor(selectedID);
    });

    setCart(finalCart);
    localStorage.setItem("cart", JSON.stringify(finalCart));
  };

  for (let i = currentCart.length - 1; i >= 0; i--) {
    finalCart.push(
      <div
        key={currentCart[i].title}
        className="cartItem"
        id={"cartItem" + currentCart[i].ID}
      >
        <NavLink
          className="itemSectionGeneral"
          key={currentCart[i].title}
          to={"/products/" + currentCart[i].ID}
        >
          <img
            className="cartItemImage"
            src={require("../../img/catalog/" + currentCart[i].Image)}
          />
          <h1 className="cartItemName">{currentCart[i].Name}</h1>
        </NavLink>
        
        <div className="itemSectionInfo">
          <h1 className="cartItemQuantity">×{currentCart[i].Quantity}</h1>
          <h1 className="cartItemPrice">{currentCart[i].Price} $</h1>
          <button
            className="deleteCartItem"
            id={"delete_CartItem" + currentCart[i].ID}
            onClick={deleteCartItem}
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
        <CartFooter totalCoast={totalCoast} auth={props.auth}/>
      </div>
    </div>
  );
};

export default Cart;