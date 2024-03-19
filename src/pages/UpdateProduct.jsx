import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import updateBg from "../assets/update-product-bg.jpg";

const UpdateProduct = () => {
  const {
    state: {
      id,
      name: initialName,
      image: initialImage,
      price: initialPrice,
      dampingRate: initialDampingRate,
      amount: initialAmount,
      description: initialDescription,
    },
  } = useLocation();

  const [name, setName] = useState(initialName);
  const [image, setImage] = useState(initialImage);
  const [price, setPrice] = useState(initialPrice);
  const [dampingRate, setDampingRate] = useState(initialDampingRate);
  const [amount, setAmount] = useState(initialAmount);
  const [description, setDescription] = useState(initialDescription);

  const [outlineStyle, setOutlineStyle] = useState({});
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
  const [errorAlert, setErrorAlert] = useState(false); // State to manage error alert visibility
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputFocus = () => {
    setOutlineStyle({ outline: "none" });
  };

  const updateFormDivStyle = {
    backgroundImage: `url(${updateBg})`,
    height: "calc(100vh + 3rem)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "2rem 0 2rem",
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "name":
        setName(value);
        break;
      case "image":
        setImage(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "dampingRate":
        setDampingRate(value);
        break;
      case "amount":
        setAmount(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check new product's name
    if (name.trim() === "") {
      setErrors({ name: "Please enter a valid product name" });
      setErrorAlert(true);
      return;
    }

    // Check new product's image
    if (image.trim() === "") {
      setErrors({ image: "Please enter a valid product image (URL)" });
      setErrorAlert(true);
      return;
    }

    // Check new product's price
    if (isNaN(price) || price <= 0) {
      setErrors({ price: "Please enter a valid product price" });
      setErrorAlert(true);
      return;
    }

    // Check new product's discount rate
    if (isNaN(dampingRate) || dampingRate < 0 || dampingRate > 100) {
      setErrors({ dampingRate: "Please enter a valid discount rate (0-100)" });
      setErrorAlert(true);
      return;
    }

    // Check new product's quantity
    if (isNaN(amount) || amount <= 0) {
      setErrors({ amount: "Product quantity must be at least 1 or more" });
      setErrorAlert(true);
      return;
    }

    try {
      // POST updated product to the MockAPI
      const response = await axios.put(
        `https://65f717fdb4f842e8088519c9.mockapi.io/products/${id}`,
        { name, image, price, dampingRate, amount, description }
      );
      console.log("Product updated:", response.data);
      setShowAlert(true); // Show notification if successful

      // Reset form values
      setName("");
      setImage("");
      setPrice(0);
      setDampingRate(0);
      setAmount(0);
      setDescription("");

      // Navigate after successful update
      navigate("/product-list");
    } catch (error) {
      console.error("Error updating product:", error);
      setErrorAlert(true); // Show error alert if failed
    }
  };

  return (
    <div style={updateFormDivStyle}>
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center m-auto p-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(239, 221, 86, 0.9), rgba(239, 221, 86, 0.9))",
          width: "65%",
          marginBottom: "1rem",
          borderRadius: "10px",
        }}
      >
        <h3
          className="w-100 text-center mb-4 mt-5"
          style={{ color: "purple", borderBottom: "1px solid purple" }}
        >
          Update Product
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
            Product updated successfully!
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
              value={name}
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
              value={price}
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
              value={dampingRate}
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
              value={amount}
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
              value={image}
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
              value={description}
              onChange={handleChange}
              onFocus={handleInputFocus}
              style={outlineStyle}
              required
            />
          </div>
          <div className="submit-btn text-center mt-5">
            <button type="submit" className="btn bg-success text-white mt-1">
              <FaCartPlus style={{ marginBottom: ".2rem" }} /> Save Updated
              Product
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UpdateProduct;
