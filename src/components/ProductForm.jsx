import React, { useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import axios from "axios";

const ProductForm = ({ mode, product, setProduct, navigate }) => {
  // Conditional Rendering
  const isEditMode = mode === "update";
  const formTitle = isEditMode ? "Update Product" : "New Product";
  const successMessage = isEditMode
    ? "Product updated successfully!"
    : "New product added successfully!";

  const BASE_URL = "https://65f717fdb4f842e8088519c9.mockapi.io/products";
  const initialFormData = isEditMode
    ? product
    : {
        name: "",
        image: "",
        price: 0,
        dampingRate: 0,
        amount: 0,
        description: "",
      };

  const [formData, setFormData] = useState(initialFormData);
  const [outlineStyle, setOutlineStyle] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
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

  const handleInputFocus = () => {
    setOutlineStyle({ outline: "none" });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, image, price, dampingRate, amount } = formData;

    // Validation checks
    if (name.trim() === "") {
      setErrors({ name: "Please enter a valid product name" });
      setErrorAlert(true);
      return;
    }
    if (image.trim() === "") {
      setErrors({ image: "Please enter a valid product image (URL)" });
      setErrorAlert(true);
      return;
    }
    if (isNaN(price) || price <= 0) {
      setErrors({ price: "Please enter a valid product price" });
      setErrorAlert(true);
      return;
    }
    if (isNaN(dampingRate) || dampingRate < 0 || dampingRate > 100) {
      setErrors({ dampingRate: "Please enter a valid discount rate (0-100)" });
      setErrorAlert(true);
      return;
    }
    if (isNaN(amount) || amount <= 0) {
      setErrors({ amount: "Product quantity must be at least 1 or more" });
      setErrorAlert(true);
      return;
    }

    console.log(errors);

    try {
      isEditMode
        ? await axios.put(`${BASE_URL}/${product.id}`, formData)
        : await axios.post(BASE_URL, formData);

      setShowAlert(true);

      if (!isEditMode) {
        setFormData(initialFormData); // Reset form data for new product
      } else {
        setTimeout(() => {
          navigate("/product-list"); // navigate to product-list after updating
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      if (Object.keys(errors).length > 0) {
        // Check if error object is not empty
        setErrorAlert(true);
      }
      setShowAlert(false); // Don't show success alert if there's an error
    }
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
        {formTitle}
      </h3>
      {errorAlert && (
        <Alert
          variant="danger"
          onClose={() => setErrorAlert(false)}
          dismissible
        >
          {errorAlert && Object.keys(errors).length > 0 && (
            <span>{errors[Object.keys(errors)[0]]}</span>
          )}
        </Alert>
      )}
      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {successMessage}
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
          <button
            type="submit"
            className={`btn ${
              isEditMode ? "bg-success text-white" : "bg-warning text-black"
            }  mt-1`}
          >
            <FaCartPlus style={{ marginBottom: ".2rem" }} />{" "}
            {isEditMode ? "Save Updated Product" : "Save To New Product"}
          </button>
        </div>
      </div>
    </Form>
  );
};

export default ProductForm;
