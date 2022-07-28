//import modules
import React, { useState, useEffect } from "react";

const Catalog = () => {
  return <PhoneItems />;
};

const PhoneItems = () => {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result.message.result);
          console.log(result.message.result);
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
      <div className="Content">
        <div className="catalog">
          {items.map((data) => (
            <div className="phoneItem" key={"item" + data.ID}>
              <h2 className="itemYear" key={"itemYear" + data.ID}>
                {" "}
                {data.Announced}{" "}
              </h2>
              <img
                className="itemImage"
                src={require("../../img/catalog/" + data.Image)}
              />
              <h1 className="itemName" key={"itemName" + data.ID}>
                {" "}
                {data.Name}{" "}
              </h1>
              <h2 className="itemPrice" key={"itemPrice" + data.ID}>
                {" "}
                {data.Price}${" "}
              </h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Catalog;
