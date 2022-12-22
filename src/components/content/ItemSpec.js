//import modules
import React from "react";

const ItemSpec = (props) => {

  let finalRowsSpec = [];

  for (let i = 0; i < props.arrTableSpec.length - 1; i++) {
    let nameSpec = props.arrTableSpec[i].replaceAll(' ','');

    finalRowsSpec.push(
      <tr>
        <td className="rowTitle">{props.arrTableSpec[i]}</td>
        <td>{props.item[nameSpec]}</td>
      </tr>
    );

  }
  return (
    <div className="itemSpec">
      <table className="tableSpec">
        {finalRowsSpec}
      </table>
    </div>
  );
};

export default ItemSpec;
