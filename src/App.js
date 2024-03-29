// import components
import Header from "./components/header/Header";
import Catalog from "./components/content/Catalog";
import ItemPage from "./components/content/ItemPage";
import HomePage from "./components/home/home";
import Profile from "./components/profile/profile";
import Login from "./components/login/loginPage";
import Cart from "./components/cart/cart";

// import styles
import "./styles/App.css";
import "./styles/header.css";
import "./styles/content.css";
import "./styles/catalog.css";
import "./styles/home.css";
import "./styles/login.css";
import "./styles/profile.css";
import "./styles/input.css";
import "./styles/button.css";
import "./styles/cart.css";
import "./styles/itemPage.css";

// import modules
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function checkLocalStorageAuth() {
  var isAuthorized = localStorage.getItem('authorized') === 'true';
  return isAuthorized;
}

function checkLocalStorageLogin() {
  let login = localStorage.getItem('login');
  console.log(localStorage.getItem('login'))
  return login;
}

function App() {

  const [authorized, setAuthorized] = useState(checkLocalStorageAuth());
  const [login, setLogin] = useState();

  const authorizedCallback = (LoginData) => {
    setAuthorized(LoginData);
    setLogin(checkLocalStorageLogin())
    console.log(LoginData, checkLocalStorageLogin())
  }

  return (
    <BrowserRouter>
      <div className="Wrapper">
        <Header auth={authorized} callback={authorizedCallback} login={login}/>
        <div className="WrapperContent">
          <Routes>
            <Route path="/" element={ <Navigate to="/home"/> } />
            <Route path="/home" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/user/:login" element={<Profile auth={authorized}/>} />
            <Route path="/login" element={<Login auth={authorized} callback={authorizedCallback}/>} />
            <Route path="/cart" element={<Cart auth={authorized}/>} />
            <Route path="/products/:id" element={<ItemPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
