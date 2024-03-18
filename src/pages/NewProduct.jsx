import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import formBg from "../assets/new-product-bg.jpg";

const NewProduct = () => {
  const [outlineStyle, setOutlineStyle] = useState({});

  const handleInputFocus = () => {
    setOutlineStyle({ outline: "none" });
  };

  const formDivStyle = {
    backgroundImage: `url(${formBg})`,
    height: "calc(100vh + 50px)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "2rem 0 2rem",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={formDivStyle}>
      <Form
        className="d-flex flex-column justify-content-center align-items-center w-50 m-auto p-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 218, 185, 0.5), rgba(255, 218, 185, 0.7))",
        }}
      >
        <h3 className="w-100 text-center mb-4 mt-5">New Product</h3>
        <div className="form-body w-100">
          <div className="mb-2">
            <label htmlFor="product-name">Product Name</label>
            <br />
            <input
              className="w-100 rounded-2 border border-2 mt-2 ps-2"
              type="text"
              id="product-name"
              required
              onFocus={handleInputFocus}
              style={outlineStyle}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="product-price">Product Price</label>
            <br />
            <input
              className="w-100 rounded-2 border border-2 mt-2 ps-2"
              type="number"
              id="product-price"
              required
              onFocus={handleInputFocus}
              style={outlineStyle}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="product-discount">Product Discount Rate (%)</label>
            <br />
            <input
              className="w-100 rounded-2 border border-2 mt-2 ps-2"
              type="number"
              id="product-discount"
              required
              onFocus={handleInputFocus}
              style={outlineStyle}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="product-quantity">Product Quantity</label>
            <br />
            <input
              className="w-100 rounded-2 border border-2 ps-2"
              type="number"
              id="product-quantity"
              required
              onFocus={handleInputFocus}
              style={outlineStyle}
            />
          </div>
          <div className="position-relative mt-3 mb-2">
            <label htmlFor="product-image">Product Image</label>
            <br />
            <span
              className="position-absolute rounded-2"
              style={{
                padding: ".06rem .3rem 1rem",
                margin: ".55rem .06rem .06rem",
                height: "28px",
                backgroundColor: "lightgrey",
                border: "1px solid lightblack",
                borderBottomRightRadius: "5px",
                borderTopRightRadius: "5px",
                fontWeight: "lighter",
                fontSize: "1rem",
              }}
            >
              https://example.com/
            </span>
            <input
              className="w-100 rounded-2 border border-2 mt-2"
              type="text"
              id="product-image"
              style={{ paddingLeft: "10rem", ...outlineStyle }}
              onFocus={handleInputFocus}
              required
            />
          </div>
          <div className="mb-2 mt-3">
            <label htmlFor="product-desc">Product Description</label>
            <br />
            <input
              className="w-100 rounded-2 border border-2 mt-2 ps-2"
              type="number"
              id="product-desc"
              required
              onFocus={handleInputFocus}
              style={outlineStyle}
            />
          </div>
          <div className="submit-btn text-center mt-5">
            <button
              type="submit"
              className="btn bg-success text-white"
              onClick={handleSubmit}
            >
              <FaCartPlus style={{ marginBottom: ".2rem" }} /> Save To New
              Product
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default NewProduct;
