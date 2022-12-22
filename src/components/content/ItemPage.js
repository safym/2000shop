//import modules
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

//import icons
import { RiCameraFill } from "react-icons/ri";
import { BsSlashSquare } from "react-icons/bs";
import { MdMemory } from "react-icons/md";

//import compoments
import BtnBack from "../utility/BtnBack";
import ItemNameColoful from "./IItemNameColorful";
import ItemSpec from "./ItemSpec";

const ItemPage = () => {
  let { id } = useParams();

  const [error, setError] = useState(false);
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetch("https://ubivaem.space/api/products/" + id)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result.message.result[0]);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else {
    if (item.length != 0) {
      const imgSrc = require("../../img/catalog/" + item.Image);

      let arrTableSpec = [
        "Name", 
        "Announced", 
        "Network Technology",
        "Body Dimensions",
        "Body Weight",
        "Display Type",
        "Display Resolution",
        "OS",
        "CPU",
        "Main Camera",
        "Selfie Camera",
        "Battery",
        "Memory",
        "Bluetooth",
        "GPS",
        "Radio",
        "USB"
      ];

      return (
        <div className="Content">
          <div className="navItemPage">
            <BtnBack />
          </div>

          <div className="itemWrapper">
            <div className="itemImageWraper">
              <img className="itemPageImage" src={imgSrc} />
            </div>

            <div className="itemPageNameWrap">
              <ItemNameColoful imgSrc={imgSrc} Name={item.Name} />
            </div>

            <h1 className="itemPageDisplay">
              <BsSlashSquare className="specIcon" />
              {item.DisplayResolution}
            </h1>
            <h1 className="itemPageCamera">
              <RiCameraFill className="specIcon" />
              {" " + item.MainCamera}
            </h1>
            <h1 className="itemPageMemory">
              <MdMemory className="specIcon" />
              {item.Memory}
            </h1>

            <div className="itemInfo">
              <hr className="styledBorderline" />
              <p className="itemDesc">{item.Description}</p>
              <hr className="styledBorderline" />

              <ItemSpec item={item} arrTableSpec={arrTableSpec} />

            </div>
          </div>
        </div>
      );
    }
  }
};

export default ItemPage;
