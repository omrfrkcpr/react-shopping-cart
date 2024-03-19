import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import updateBg from "../assets/update-product-bg.jpg";

const UpdateProduct = () => {
  const {
    state: { product },
  } = useLocation();
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const navigate = useNavigate();

  const updateFormDivStyle = {
    backgroundImage: `url(${updateBg})`,
    height: "calc(100vh + 3rem)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "2rem 0 2rem",
  };

  return (
    <div style={updateFormDivStyle}>
      <ProductForm
        mode="update"
        product={updatedProduct}
        setProduct={setUpdatedProduct}
        navigate={navigate}
      />
    </div>
  );
};

export default UpdateProduct;
