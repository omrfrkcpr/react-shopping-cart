import React from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  // Style productList component
  const productListStyle = {
    background: "#d2905e",
    height: "calc(100vh - 93px)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={productListStyle}>
      <ProductCard />
    </div>
  );
};

export default ProductList;
