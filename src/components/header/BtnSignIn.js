// import modules
import { NavLink } from "react-router-dom";

function BtnSignIn(props) {
  if (props.visible == true) {
    return <NavLink className="header_button" id="buttonSignIn" role="button" to={props.href}>
      {props.name}
    </NavLink>
  }
}

export default BtnSignIn;  