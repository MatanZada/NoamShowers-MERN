import { Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useDispatch, useSelector } from "react-redux";
import Logout from "./pages/Logout";
import React, { useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import UserProfile from "./components/UserProfile";
import Navbar from "./components/Navbar";
import { productsFetch } from "./redux/productSlice";
import { cartFetch } from "./redux/cartRedux";
const App = () => {
  const { userData } = useAuth()
  const dispatch = useDispatch();

  const products = useSelector((state) => state.itemsData.items);
  useEffect(() => {
    dispatch(productsFetch());
  }, []);
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
          element={userData ? <Navigate to="/" /> : <Register />}
        />
        <Route path="login" element={userData ? <Navigate to="/" /> : <Login />} />
        <Route path="signout" element={<Logout redirect="/" />} />
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
