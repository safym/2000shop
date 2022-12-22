//import modules
import React, { useState } from "react";

//import functions
import checkExistItem from "./FuncCheckExistItem";

const BtnAddToCart = (props) => {
  var currentCart = JSON.parse(localStorage.getItem("cart"));
  var resultCheck= checkExistItem(currentCart, props.data)
  
  const [isInCart, setIsInCart] = useState(resultCheck)

  if (isInCart) {
    return (
      <button
        className="myButtonActive"
        type="submit"
        onClick={() => {
          setIsInCart(true)
          props.callback(props.data);
          }}>
        Add another
      </button>
    );
  } else {
    return (
      <button
        className="myButton"
        type="submit"
        onClick={() => {
          setIsInCart(true)
          props.callback(props.data);
          }}>
        Add to cart
      </button>
    );
  }
  
};

export default BtnAddToCart;