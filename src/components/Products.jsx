import React from "react";
import Product from "./Product";

const Products = ({
  products,
  handleMinus,
  handlePlus,
  handleRemove,
  isSmallScreen,
}) => {
  return (
    <ul
      className="products-section mt-5 bg-white"
      style={{
        border: "1px solid lightgrey",
        borderRadius: "10px",
        height: "auto",
        maxHeight: "70vh",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "#888 #f1f1f1",
        width: isSmallScreen ? "90%" : "55%",
        textAlign: "left",
      }}
    >
      {products
        .slice(0)
        .reverse()
        .map(({ id, ...product }) => (
          <Product
            key={id}
            id={id}
            {...product}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
            handleRemove={handleRemove}
          />
        ))}
    </ul>
  );
};

export default Products;
