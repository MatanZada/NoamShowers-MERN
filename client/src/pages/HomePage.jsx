import React from "react";

import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Slider from "../components/Slider";

const HomePage = () => {

  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
