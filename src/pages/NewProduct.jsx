import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import formBg from "../assets/new-product-bg.jpg";
import axios from "axios";
import { useNavigate } from "react-router";

const NewProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
    dampingRate: 0,
    amount: 0,
    description: "",
  });

  const [outlineStyle, setOutlineStyle] = useState({});
  const navigate = useNavigate();

  const handleInputFocus = () => {
    setOutlineStyle({ outline: "none" });
  };

  const formDivStyle = {
    backgroundImage: `url(${formBg})`,
    height: "calc(100vh - 93px)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "2rem 0 2rem",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://65f717fdb4f842e8088519c9.mockapi.io/products",
        formData
      );
      console.log("New product created:", response.data);
      // Reset form data after successful submission
      setFormData({
        name: "",
        image: "",
        price: 0,
        dampingRate: 0,
        amount: 0,
        description: "",
      });
    } catch (error) {
      console.error("Error creating new product:", error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  return (
    <div style={formDivStyle}>
      <Form
        className="d-flex flex-column justify-content-center align-items-center m-auto p-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 218, 185, 0.5), rgba(255, 218, 185, 0.9))",
          width: "65%",
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
              id="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleInputFocus}
              style={outlineStyle}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="product-price">Product Price</label>
            <br />
            <input
              className="w-100 rounded-2 border border-2 mt-2 ps-2"
              type="number"
              id="price"
              value={formData.price}
              onChange={handleChange}
              onFocus={handleInputFocus}
              style={outlineStyle}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="product-discount">Product Discount Rate (%)</label>
            <br />
            <input
              className="w-100 rounded-2 border border-2 mt-2 ps-2"
              type="number"
              id="dampingRate"
              value={formData.dampingRate}
              onChange={handleChange}
              onFocus={handleInputFocus}
              style={outlineStyle}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="product-quantity">Product Quantity</label>
            <br />
            <input
              className="w-100 rounded-2 border border-2 mt-2 ps-2"
              type="number"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              onFocus={handleInputFocus}
              style={outlineStyle}
              required
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
              id="image"
              value={formData.image}
              onChange={handleChange}
              onFocus={handleInputFocus}
              style={{ paddingLeft: "10rem", ...outlineStyle }}
              required
            />
          </div>
          <div className="mb-2 mt-3">
            <label htmlFor="product-desc">Product Description</label>
            <br />
            <input
              className="w-100 rounded-2 border border-2 mt-2 ps-2"
              type="text"
              id="description"
              value={formData.description}
              onChange={handleChange}
              onFocus={handleInputFocus}
              style={outlineStyle}
              required
            />
          </div>
          <div className="submit-btn text-center mt-5">
            <button
              type="submit"
              className="btn bg-success text-white mt-1"
              onClick={handleSubmit}
            >
              <FaCartPlus style={{ marginBottom: ".2rem" }} /> Save To New
              Product
            </button>
            <button
              onClick={() => navigate("/product-list")}
              className="btn bg-primary text-white ms-2 mt-1"
            >
              See All Products
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default NewProduct;
