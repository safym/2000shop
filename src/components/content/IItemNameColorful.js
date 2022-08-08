//import modules
import { Palette } from "color-thief-react";

const ItemNameColoful = (props) => {
  return (
    <Palette src={props.imgSrc} crossOrigin="anonymous" format="hex" colorCount={10}>
      {({ data, loading }) => {
        if (loading) return console.log(props.imgSrc);
        return (
          <h1
            className="itemPageName"
            style={{
              backgroundImage:
                "linear-gradient(to bottom left," + data[4] + ", " + data[6],
            }}
          >
            {props.Name}
          </h1>
        );
      }}
    </Palette>
  );
};

export default ItemNameColoful;