// import modules
import { NavLink } from "react-router-dom";

function HeaderLink(prop) {
  if (prop.visible == true) {
    var idLink = "button_" + prop.name;
    return <NavLink className="header_button" id={idLink} role="button" to={prop.href}> {prop.name} </NavLink>
  }
}
export default HeaderLink;  