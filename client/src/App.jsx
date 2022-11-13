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

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />

      <Route path="products/:category" element={<ProductList />} />
      <Route path="product/:id" element={<Product />} />
      <Route
        path="register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="signout" element={<Logout redirect="/" />} />

      <Route path="cart" element={<Cart />} />
      <Route path="success" element={<Success />} />
    </Routes>
  );
};

export default App;
