// import components
import ComponentsLogin from "./login"
// import { useNavigate } from "react-router-dom"

const LoginPage = (props) => {

  if (props.auth) {
    return (
      <h1 className="infoMessage" >You're signed in!</h1>
    )
  }

  return (
    <div className="login">

      <h1 className="loginLabel">Hello!</h1>
      <ComponentsLogin callback={props.callback} />
    </div>
  );
};

export default LoginPage;
