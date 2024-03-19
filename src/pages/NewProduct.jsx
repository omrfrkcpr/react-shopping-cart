import React from "react";
import formBg from "../assets/new-product-bg.jpg";
import ProductForm from "../components/ProductForm";

const NewProduct = () => {
  const formDivStyle = {
    backgroundImage: `url(${formBg})`,
    height: "calc(100vh + 3rem)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "2rem 0 2rem",
  };

  return (
    <div style={formDivStyle}>
      <ProductForm mode="new" />
    </div>
  );
};

export default NewProduct;
