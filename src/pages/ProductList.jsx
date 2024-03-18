import React, { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Get all data of products from MockAPI
  const axiosData = async () => {
    try {
      const response = await axios.get(
        "https://65f717fdb4f842e8088519c9.mockapi.io/products"
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      setProducts(response.data);
    } catch (error) {
      console.log("There was a problem with the fetch operation", error);
    }
  };

  useEffect(() => {
    axiosData();
  }, []);

  // Style productList component
  const productListStyle = {
    background: "#d2905e",
    height: "calc(100vh - 93px)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // Using Reduce method to calculate totalAmount and totalTax of products
  const { totalAmount, totalTax } = products.reduce(
    (acc, { price, dampingRate, amount }) => {
      const productTotal =
        dampingRate !== 0 && dampingRate >= 0
          ? ((price - (price * dampingRate) / 100) * amount).toFixed(2)
          : (price * amount).toFixed(2);
      return {
        totalAmount: acc.totalAmount + parseFloat(productTotal),
        totalTax: acc.totalTax + parseFloat(productTotal) * 0.19,
      };
    },
    { totalAmount: 0, totalTax: 0 }
  );

  // Increase product amount both on screen and in database
  const handlePlus = async (productID) => {
    try {
      const updatedProducts = products.map((product) => {
        if (product.id === productID) {
          return { ...product, amount: product.amount + 1 };
        }
        return product;
      });

      const response = await axios.put(
        `https://65f717fdb4f842e8088519c9.mockapi.io/products/${productID}`,
        {
          amount: updatedProducts.find((product) => product.id === productID)
            .amount,
        }
      );

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      setProducts(updatedProducts);
    } catch (error) {
      console.log("There was a problem with the update operation", error);
    }
  };

  // Decrease product amount both on screen and in database
  const handleMinus = async (productID) => {
    try {
      const updatedProducts = products.map((product) => {
        if (product.id === productID && product.amount > 0) {
          return { ...product, amount: product.amount - 1 };
        }
        return product;
      });

      if (
        updatedProducts.find((product) => product.id === productID).amount === 0
      ) {
        handleRemove(productID);
      } else {
        const response = await axios.put(
          `https://65f717fdb4f842e8088519c9.mockapi.io/products/${productID}`,
          {
            amount: updatedProducts.find((product) => product.id === productID)
              .amount,
          }
        );

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        setProducts(updatedProducts);
      }
    } catch (error) {
      console.log("There was a problem with the update operation", error);
    }
  };

  // Delete product permanently from both screen and database
  const handleRemove = async (productID) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await axios.delete(
          `https://65f717fdb4f842e8088519c9.mockapi.io/products/${productID}`
        );

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        // Filter out the deleted product from the products state
        const updatedProducts = products.filter(
          (product) => product.id !== productID
        );
        setProducts(updatedProducts);
      } catch (error) {
        console.log("There was a problem with the delete operation", error);
      }
    }
  };

  return (
    <div style={productListStyle}>
      <div className="d-flex justify-content-between container">
        {products.length > 0 ? (
          <ul
            className="products-section mt-5 bg-white"
            style={{
              border: "1px solid lightgrey",
              borderRadius: "10px",
              height: "auto",
              maxHeight: "80vh",
              overflow: "auto",
              width: "55%",
            }}
          >
            {products
              .slice(0)
              .reverse()
              .map(({ id, name, image, price, dampingRate, amount }) => (
                <li
                  key={id}
                  className="product list-unstyled d-flex p-2 me-5 mt-3"
                  style={{ borderBottom: "1px solid lightgrey" }}
                >
                  <div className="product-img">
                    <img
                      src={image}
                      alt={name}
                      style={{
                        width: "200px",
                        border: "1px solid lightgrey",
                        borderRadius: "10px",
                        padding: ".5rem",
                      }}
                    />
                  </div>
                  <div className="product-info ms-4 w-100">
                    <h3 className="product-name">{name}</h3>
                    <p className="product-prices">
                      <span id="discount" className="p-1 fs-3">
                        {dampingRate !== 0 && dampingRate >= 0
                          ? price - (price * dampingRate) / 100
                          : price}
                        €
                      </span>
                      <span
                        id="price"
                        className="text-decoration-line-through p-1 fs-4"
                        style={{ backgroundColor: "yellow" }}
                      >
                        {price}€
                      </span>
                    </p>
                    <div className="product-settings d-flex">
                      <div className="product-count border border-1 border-black py-1 px-2 rounded-1">
                        <button
                          id="minus"
                          className="minus border border-0 px-2"
                          onClick={() => handleMinus(id)}
                        >
                          -
                        </button>
                        <span id="count" className="count mx-2">
                          {amount}
                        </span>
                        <button
                          id="plus"
                          className="plus border border-0 px-2"
                          onClick={() => handlePlus(id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="product-remove">
                        <FaTrashCan
                          style={{
                            color: "red",
                            marginLeft: "1rem",
                            marginTop: ".5rem",
                          }}
                          type="button"
                          onClick={() => handleRemove(id)}
                        />
                      </div>
                    </div>
                    <p className="product-total mt-3">
                      Product Total:{" "}
                      <span id="product-total">
                        {dampingRate !== 0 && dampingRate >= 0
                          ? (
                              (price - (price * dampingRate) / 100) *
                              amount
                            ).toFixed(2)
                          : (price * amount).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        ) : (
          <div>
            <h3 className="mt-5 pt-3">No Products found!</h3>
            <button
              className="btn btn-success mt-3"
              onClick={() => navigate("/new-product")}
            >
              Add New Product
            </button>
          </div>
        )}

        <section
          className="summary mt-5 bg-white"
          style={{
            borderRadius: "10px",
            padding: "1rem",
            height: "200px",
            width: "400px",
          }}
        >
          <div>
            <p className="sub-total d-flex justify-content-between">
              Subtotal &nbsp;
              <span id="sub-total">{totalAmount.toFixed(2)}€</span>
            </p>
            <p className="tax d-flex justify-content-between">
              VAT (%19) &nbsp;<span id="tax">{totalTax.toFixed(2)}€</span>
            </p>
            <p className="shipping d-flex justify-content-between">
              <span id="shipping-info">Shipping</span>&nbsp;
              <span id="shipping-price">
                {totalAmount === 0 ? "0€" : totalAmount > 200 ? "Free" : "8€"}
              </span>
            </p>
            <p className="total d-flex justify-content-between">
              Total (VAT included) &nbsp;
              <span id="total">
                {(
                  totalAmount +
                  totalTax +
                  (totalAmount === 0 ? 0 : totalAmount > 200 ? 0 : 8)
                ).toFixed(2)}
                €
              </span>
            </p>
          </div>
          <div className="text-center">
            {products.length > 0 && (
              <>
                <button
                  className="btn btn-success mt-5 me-3"
                  onClick={() => navigate("/new-product")}
                >
                  <FaArrowCircleLeft />
                  <span style={{ margin: "0.1rem 0.3rem 0.1rem" }}>
                    Add More Products
                  </span>
                </button>
                <button className="btn btn-warning mt-5">
                  <FaArrowCircleRight />
                  <span style={{ margin: "0.2rem 0.3rem 0.1rem" }}>
                    Go Payment
                  </span>
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductList;
