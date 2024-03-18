import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Alert, Form } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import axios from "axios";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
    dampingRate: 0,
    amount: 0,
    description: "",
  });

  const [outlineStyle, setOutlineStyle] = useState({});
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
  const [errorAlert, setErrorAlert] = useState(false); // State to manage error alert visibility
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputFocus = () => {
    setOutlineStyle({ outline: "none" });
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // close alert after 3 seconds
      return () => clearTimeout(timer); // clear timer at componentWillUnmount
    }
  }, [showAlert]);

  useEffect(() => {
    if (errorAlert) {
      const timer = setTimeout(() => {
        setErrorAlert(false);
        setErrors({});
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorAlert]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Destructure new product
    const { name, image, price, dampingRate, amount } = formData;

    // Check new product's name
    if (name.trim() === "") {
      errors.name = "Please enter a valid product name";
    }

    // Check new product's image
    if (image.trim() === "") {
      errors.image = "Please enter a valid product image (URL)";
    }

    // Check new product's price
    if (isNaN(price) || price <= 0) {
      errors.price = "Please enter a valid product price";
    }

    // Check new product's discount rate
    if (isNaN(dampingRate) || dampingRate < 0 || dampingRate > 100) {
      errors.dampingRate = "Please enter a valid discount rate (0-100)";
    }

    // Check new product's quantity
    if (isNaN(amount) || amount <= 0) {
      errors.amount = "Product quantity must be at least 1 or more";
    }

    // If any error exists, then show the first error using Alert component
    if (Object.keys(errors).length > 0) {
      setErrorAlert(true); // Set error alert visibility to true
      return; // Return early from the function
    }

    try {
      // POST new product to the MockAPI
      const response = await axios.post(
        "https://65f717fdb4f842e8088519c9.mockapi.io/products",
        formData
      );
      console.log("New product created:", response.data);
      setShowAlert(true); // Show notification if successful

      // Reset form values
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
      setErrorAlert(true); // Show error alert if failed
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex flex-column justify-content-center align-items-center m-auto p-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 218, 185, 0.5), rgba(255, 218, 185, 0.9))",
        width: "65%",
        marginBottom: "1rem",
      }}
    >
      <h3
        className="w-100 text-center mb-4 mt-5"
        style={{ color: "purple", borderBottom: "1px solid purple" }}
      >
        New Product
      </h3>
      {errorAlert && (
        <Alert
          variant="danger"
          show={errorAlert}
          onClose={() => setErrorAlert(false)}
          dismissible
        >
          {errorAlert && Object.keys(errors).length > 0 && (
            <span>{errors[Object.keys(errors)[0]]}</span>
          )}
        </Alert>
      )}
      {!errorAlert && showAlert && (
        <Alert
          variant="success"
          show={showAlert} // Control visibility of the alert
          onClose={() => setShowAlert(false)} // Close the alert when close button clicked
          style={{ opacity: showAlert ? 1 : 0.5 }} // Set opacity based on showAlert state
          dismissible
        >
          New product added successfully!
        </Alert>
      )}
      <div className="form-body w-100">
        <div className="mb-2">
          <label className="fw-bold" htmlFor="product-name">
            Product Name
          </label>
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
          <label className="fw-bold" htmlFor="product-price">
            Product Price
          </label>
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
          <label className="fw-bold" htmlFor="product-discount">
            Product Discount Rate (%)
          </label>
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
          <label className="fw-bold" htmlFor="product-quantity">
            Product Quantity
          </label>
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
          <label className="fw-bold" htmlFor="product-image">
            Product Image
          </label>
          <br />
          <span
            className="position-absolute rounded-2"
            style={{
              padding: ".06rem .3rem 1rem",
              margin: ".55rem .06rem .06rem",
              height: "28px",
              backgroundColor: "#f0f0f0",
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
          <label className="fw-bold" htmlFor="product-desc">
            Product Description
          </label>
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
          <button type="submit" className="btn bg-success text-white mt-1">
            <FaCartPlus style={{ marginBottom: ".2rem" }} /> Save To New Product
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
  );
};

export default ProductForm;
