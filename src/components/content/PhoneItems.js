//import modules
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

//import components
import BtnAddToCart from "./BtnAddToCart";

const PhoneItems = (props) => {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://195.14.189.111:3001/api/products")
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
          <div className="cardItem">
            <NavLink
              className="phoneItemWrapper"
              key={"link" + data.ID}
              to={"/products/" + data.ID}
            >
              <PhoneItem data={data} />
            </NavLink>
            <BtnAddToCart callback={props.callback} data={data}/>
          </div>
          
        ))}
        
      </div>
      
    );
  }
};

const PhoneItem = (props) => {
  var data = props.data;
  return (
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
    </div>
  );
};

export default PhoneItems;
