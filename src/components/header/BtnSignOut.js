// import modules
import { NavLink } from "react-router-dom";

function SignOut(callback) {
    localStorage.removeItem("authorized");
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    callback(false);
}

function BtnSignOut(props) {
    if (props.visible == true) {
        return <NavLink className="header_button" id="buttonSignOut" role="button" onClick={() => { SignOut(props.callback) }} to={props.href}>
            {props.name}
        </NavLink>
    }
}

export default BtnSignOut;  