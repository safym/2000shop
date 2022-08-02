//import modules
import React, { useState, useEffect } from "react";

const Catalog = () => {
  var currentCart = JSON.parse(localStorage.getItem("cart"));
  var [cart, setCart] = useState(currentCart);

  const addToCart = (newItem) => {
    var newItemData = newItem.data;

    const checkExistItem = (newItemData) => {
      var result = false;
      cart.map((item) => {
        console.log("check");
        console.log(cart)
        console.log(item);
        console.log(newItemData);

        if (item.ID == newItemData.ID) {
          console.log("check YES");
          result = true;
        }
      });
      return result;
    };

    if (checkExistItem(newItemData)) {
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
            <button
              className="myButton"
              type="submit"
              onClick={() => props.callback({ data })}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default Catalog;


