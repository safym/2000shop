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

function checkLocalStorage() {
  var isAuthorized = localStorage.getItem('authorized') === 'true';
  return isAuthorized;
}

function App() {

  const [authorized, setAuthorized] = useState(checkLocalStorage());

  const authorizedCallback = (LoginData) => {
    setAuthorized(LoginData);
  }

  return (
    <BrowserRouter>
      <div className="Wrapper">
        <Header auth={authorized} callback={authorizedCallback} />
        <div className="WrapperContent">
          <Routes>
            <Route path="/" element={ <Navigate to="/home"/> } />
            <Route path="/home" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/profile" element={<Profile auth={authorized}/>} />
            <Route path="/login" element={<Login auth={authorized} callback={authorizedCallback}/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ItemPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
