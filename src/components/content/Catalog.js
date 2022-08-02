//import modules
import React, { useState } from "react";

//import components
import PhoneItems from "./PhoneItems"

//import functions
import checkExistItem from "./FuncCheckExistItem";

const Catalog = () => {
  var currentCart = JSON.parse(localStorage.getItem("cart"));
  var [cart, setCart] = useState(currentCart);

  const addToCart = (newItemData) => {

    // console.log(newItemData);

    if (checkExistItem(currentCart, newItemData)) {
      const newStateCart = cart.map((item) => {
        if (item.ID === newItemData.ID) {
          var newQuentity = item.Quantity + 1;
          var newPrice = item.Price + newItemData.Price;
          return { ...item, Quantity: newQuentity, Price: newPrice};
        }

        return item;
      });
      setCart(newStateCart);
      localStorage.setItem("cart", JSON.stringify(newStateCart));
    } else {
      newItemData.Quantity = 1;
      currentCart.push(newItemData);
      setCart(currentCart);
      localStorage.setItem("cart", JSON.stringify(currentCart));
    }
  };

  return (
    <div className="Content">
      <PhoneItems callback={addToCart} />
    </div>
  );
};

export default Catalog;


