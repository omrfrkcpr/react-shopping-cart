import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import NewProduct from "../pages/NewProduct";
import ProductList from "../pages/ProductList";
import About from "../pages/About";
import NavbarComp from "../components/Navbar";
import UpdateProduct from "../pages/UpdateProduct";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <NavbarComp />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/home" element={<Main />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/update-product" element={<UpdateProduct />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
