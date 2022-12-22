//import modules
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Palette } from "color-thief-react";

//import icons
import { RiCameraFill } from "react-icons/ri";
import { BsSlashSquare } from "react-icons/bs";
import { MdMemory } from "react-icons/md";

//import compoments
import BtnBack from "../utility/BtnBack";
import ItemNameColoful from "./IItemNameColorful";

const ItemPage = () => {
  let { id } = useParams();

  const [error, setError] = useState(false);
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetch("http://195.14.189.111:3001/api/products/" + id)
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
              <div className="itemSpec">
                <table className="tableSpec">
                  <tr>
                    <td className="rowTitle">Name</td>
                    <td>{item.Name}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Announced</td>
                    <td>{item.Announced}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Network technology</td>
                    <td>{item.NetworkTechnology}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Body dimensions</td>
                    <td>{item.BodyDimensions}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Body weight</td>
                    <td>{item.BodyWeight}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Display type</td>
                    <td>{item.DisplayType}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Display resolution</td>
                    <td>{item.DisplayResolution}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">OS</td>
                    <td>{item.OS}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">CPU</td>
                    <td>{item.CPU}</td>
                  </tr>
                </table>

                <table className="tableSpec">
                  <tr>
                    <td className="rowTitle">Main camera</td>
                    <td>{item.MainCamera}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Selfie camera</td>
                    <td>{item.SelfieCamera}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Battery</td>
                    <td>{item.Battery}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Memory</td>
                    <td>{item.Memory}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Bluetooth</td>
                    <td>{item.Bluetooth}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">GPS</td>
                    <td>{item.GPS}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Radio</td>
                    <td>{item.Radio}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">USB</td>
                    <td>{item.USB}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default ItemPage;
