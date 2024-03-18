import React from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Summary = ({ totalAmount, totalTax, products, navigate }) => {
  return (
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
              <span style={{ margin: "0.2rem 0.3rem 0.1rem" }}>Go Payment</span>
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Summary;
