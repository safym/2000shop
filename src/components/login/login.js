// import components
import { Component, useState } from "react";
import { useNavigate } from "react-router-dom";

const ComponentsLogin = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth] = useState(false);

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

  function checkAccount() {
    const url =
      "https://ubivaem.space/api/auth/login=" +
      login +
      "&pass=" +
      password;

    async function getDataApi(url, callback) {
      fetch(url)
        .then((response) => response.json())
        .then((result) => callback(result))

    }

    getDataApi(url, (data) => {
      console.log(data.message)
      setAuth(data.message);

      if (data.message == true) {
        history("/user/" + login);
      }
    });
  }

  const handleFormSubmit = async (event) => {
    checkAccount();

    event.preventDefault();
    if (auth == true) {
      localStorage.setItem("login", login);
      localStorage.setItem("password", password);
      localStorage.setItem("authorized", "true");

      props.callback(auth);
    }
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
