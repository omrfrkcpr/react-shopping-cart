import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({ products, handleMinus, handlePlus, handleRemove }) => {
  const [containerWidth, setContainerWidth] = useState("50%");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1600) {
        setContainerWidth("30%");
      } else if (windowWidth > 1200 && windowWidth < 1600) {
        setContainerWidth("45%");
      } else if (windowWidth < 1200 && windowWidth > 800) {
        setContainerWidth("60%");
      } else if (windowWidth < 800 && windowWidth > 500) {
        setContainerWidth("90%");
      } else {
        setContainerWidth("99%");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        width: containerWidth,
        textAlign: "left",
      }}
    >
      {products.map(({ id, ...product }, index) => (
        <Product
          key={id}
          id={id}
          index={index}
          {...product}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          handleRemove={handleRemove}
          containerWidth={containerWidth}
        />
      ))}
    </ul>
  );
};

export default Products;
