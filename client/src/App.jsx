import { Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Logout from "./pages/Logout";
import React, { useEffect } from "react";
import axios from "axios";
import { useAuth } from "./context/AuthContext";
import { userRequest } from "./requestMethods";
import UserProfile from "./components/UserProfile";
import Navbar from "./components/Navbar";
const App = () => {
  const userToken = useSelector((state) => state.user.currentUser);
  const { user } = useAuth();

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="product/:id" element={<Product />} />
        <Route
          path="register"
          element={userToken ? <Navigate to="/" /> : <Register />}
        />
        <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="signout" element={<Logout redirect="/" />} />

        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
