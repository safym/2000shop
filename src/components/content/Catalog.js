//import modules
import React, { useState, useEffect } from "react";

// import icons
import {FaShoppingCart} from "react-icons/fa";

const Catalog = () => {
  let [cart, setCart] = useState([]);
  let [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item.data])
  };

  const openCart = () => {
    setCartOpen(true)
  };


  return (
    <div className="Content">
      <PhoneItems callback={addToCart} />
      <Cart items={cart} cartOpen={cartOpen}/>
      <ButtonCart className="OpenCart" cart={cart} callback={openCart}/>
    </div>
  );
};

const PhoneItems = (props) => {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result.message.result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else {
    return (
      <div className="catalog">
        {items.map((data) => (
          <div className="phoneItem" key={"item" + data.ID}>
            <h2 className="itemYear" key={"itemYear" + data.ID}>
              {data.Announced}
            </h2>
            <img
              className="itemImage"
              src={require("../../img/catalog/" + data.Image)}
            />
            <h1 className="itemName" key={"itemName" + data.ID}>
              {data.Name}
            </h1>
            <h2 className="itemPrice" key={"itemPrice" + data.ID}>
              {data.Price + " "}$
            </h2>
            <button className="myButton" type="submit" onClick={() => props.callback({data})}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    );
  }
};

const Cart = (props) => {
  console.log(props.cartOpen);
  if (props.cartOpen) {
  return (
    <div className="cart">
      {props.items.map((data) => (
        <p className="cartItem" key={"item" + data.ID}>
         {data.Name}
        </p>
      ))}
      <button className="myButton" type="submit">
              Order
      </button>
    </div>
  );
  }
}

const ButtonCart = (props) => {
  console.log(props.cart.length);
  if (props.cart.length) {
    return (
      <button className="openCart" onClick={props.callback}>
        Cart
        <FaShoppingCart />
      </button>
    );
  }

}

export default Catalog;
