//import modules
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Color, { Palette } from 'color-thief-react';

//import icons
import { RiCameraFill } from "react-icons/ri";
import { BsSlashSquare } from "react-icons/bs";
import { MdMemory } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";

const ItemPage = () => {
  let { id } = useParams();

  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products/" + id)
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
    if (items.length != 0) {
      const imgSrc = require("../../img/catalog/" + items.Image);

      return (
        <div className="Content">
          <div className="navItemPage">
            <NavLink className="navButtonBack" to="/catalog">
              <IoMdArrowBack />
              To catalog
            </NavLink>
          </div>

          <div className="itemWrapper">
            <div className="itemImageWraper">
              <img
                className="itemPageImage"
                src={imgSrc}
              />
            </div>

            <div className="itemPageNameWrap" >
              <Palette src={imgSrc} crossOrigin="anonymous" format="hex" colorCount={6}>
                {({ data, loading }) => {
                  if (loading) return <ItemPage />;
                  return (
                    <h1
                      className="itemPageName"
                      style={{ backgroundImage: "linear-gradient(to bottom left," + data[0] + ", " + data[5] }}>
                      {items.Name}
                    </h1>
                  );
                }}
              </Palette>
            </div>

            {/* <h1 className="itemPageName">{items.Name}</h1> */}
            <h1 className="itemPageDisplay">
              <BsSlashSquare className="specIcon" />
              {items.DisplayResolution}
            </h1>
            <h1 className="itemPageCamera">
              <RiCameraFill className="specIcon" />
              {" " + items.MainCamera}
            </h1>
            <h1 className="itemPageMemory">
              <MdMemory className="specIcon" />
              {items.Memory}
            </h1>

            <div className="itemInfo">
              <hr className="styledBorderline" />
              <p className="itemDesc">{items.Description}</p>
              <hr className="styledBorderline" />
              <div className="itemSpec">
                <table className="tableSpec">
                  <tr>
                    <td className="rowTitle">Name</td>
                    <td>{items.Name}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Announced</td>
                    <td>{items.Announced}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Network technology</td>
                    <td>{items.NetworkTechnology}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Body dimensions</td>
                    <td>{items.BodyDimensions}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Body weight</td>
                    <td>{items.BodyWeight}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Display type</td>
                    <td>{items.DisplayType}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Display resolution</td>
                    <td>{items.DisplayResolution}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">OS</td>
                    <td>{items.OS}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">CPU</td>
                    <td>{items.CPU}</td>
                  </tr>
                </table>

                <table className="tableSpec">
                  <tr>
                    <td className="rowTitle">Main camera</td>
                    <td>{items.MainCamera}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Selfie camera</td>
                    <td>{items.SelfieCamera}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Battery</td>
                    <td>{items.Battery}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Memory</td>
                    <td>{items.Memory}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Bluetooth</td>
                    <td>{items.Bluetooth}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">GPS</td>
                    <td>{items.GPS}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">Radio</td>
                    <td>{items.Radio}</td>
                  </tr>
                  <tr>
                    <td className="rowTitle">USB</td>
                    <td>{items.USB}</td>
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
