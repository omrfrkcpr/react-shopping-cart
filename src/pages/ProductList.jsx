import React from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  // Style productList component
  const productListStyle = {
    background: "#ffebc4",
    height: "calc(100vh - 40px)",
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
