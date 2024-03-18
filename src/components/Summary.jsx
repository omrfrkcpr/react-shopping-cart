import React from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Summary = ({ totalAmount, totalTax, products, navigate }) => {
  const renderLine = (label, value) => (
    <p
      className="summary-line d-flex justify-content-between"
      style={{ borderBottom: "1px solid lightgrey" }}
    >
      {label} &nbsp;
      <span>{value}</span>
    </p>
  );

  return (
    <section
      className="summary mt-5 bg-white"
      style={{
        borderRadius: "10px",
        padding: "1rem",
        height: "200px",
        width: "380px",
      }}
    >
      <div>
        {renderLine("Subtotal", `${totalAmount.toFixed(2)}€`)}
        {renderLine("VAT (%19)", `${totalTax.toFixed(2)}€`)}
        {renderLine(
          "Shipping",
          totalAmount === 0 ? "0€" : totalAmount > 200 ? "Free" : "8€"
        )}
        {renderLine(
          "Total (VAT included)",
          `${(
            totalAmount +
            totalTax +
            (totalAmount === 0 ? 0 : totalAmount > 200 ? 0 : 8)
          ).toFixed(2)}€`
        )}
      </div>
      <div className="text-center">
        {products.length > 0 && (
          <div style={{ marginTop: "5rem" }}>
            <button
              className="btn btn-success me-3"
              onClick={() => navigate("/new-product")}
            >
              <FaArrowCircleLeft />
              <span style={{ margin: "0.1rem 0.3rem 0.1rem" }}>
                Add More Products
              </span>
            </button>
            <button className="btn btn-warning">
              <FaArrowCircleRight />
              <span style={{ margin: "0.2rem 0.3rem 0.1rem" }}>Go Payment</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Summary;
