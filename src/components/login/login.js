// import components
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ComponentsLogin = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [color, setColor] = useState("#000000");

  const history = useNavigate();

  const handleChange = (event) => {
    setColor("#000000");

    const input = event.target;
    const value = input.value;

    if (input.name == "login") {
      setLogin(value);
    }
    if (input.name == "password") {
      setPassword(value);
    }
  };

  async function checkAccount() {
    const url =
      "https://ubivaem.space/api/auth/login=" + login + "&pass=" + password;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        return result.message;
      })
      .then((resultAuth) => {
        if (resultAuth == true) {
          localStorage.setItem("login", login);
          localStorage.setItem("authorized", "true");
        }
        return resultAuth;
      })
      .then((resultAuth) => {
        props.callback(resultAuth);
        return resultAuth;
      })
      .then((resultAuth) => {
        if (resultAuth) {
          history("/user/" + login);
        }
      });
  }

  const handleFormSubmit = (event) => {
    checkAccount();
    event.preventDefault();
  };

  return (
    <form className="LoginPassword" onSubmit={handleFormSubmit}>
      <input
        className="styledInput"
        id="login"
        placeholder="Login"
        name="login"
        value={login}
        onChange={handleChange}
        style={{ color: color }}
      />

      <input
        className="styledInput"
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        style={{ color: color }}
      />

      <button className="myButton" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default ComponentsLogin;
