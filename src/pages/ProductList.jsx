import React from "react";
import product1 from "../assets/macbook.jpg";
import { FaTrashCan } from "react-icons/fa6";

const ProductList = () => {
  return (
    <div className="d-flex justify-content-between container mt-5">
      <section
        className="products-section w-50"
        style={{ border: "1px solid lightgrey", borderRadius: "10px" }}
      >
        <ul className="products mt-3">
          <li
            className="product list-unstyled d-flex p-2 me-5 mt-3"
            style={{ borderBottom: "1px solid lightgrey" }}
          >
            <div className="product-img">
              <img
                src={product1}
                alt="macbook"
                style={{
                  width: "200px",
                  border: "1px solid lightgrey",
                  borderRadius: "10px",
                  padding: ".5rem",
                }}
              />
            </div>
            <div className="product-info ms-4 w-100">
              <h3 className="product-name">Macbook</h3>
              <p className="product-prices">
                <span id="discount" className="p-1 fs-4">
                  99€
                </span>
                <span
                  id="price"
                  className="text-decoration-line-through p-1"
                  style={{ backgroundColor: "yellow" }}
                >
                  120€
                </span>
              </p>
              <div className="product-settings d-flex">
                <div className="product-count border border-1 border-black py-1 px-2 rounded-1">
                  <button id="minus" className="minus border border-0 px-2">
                    -
                  </button>
                  <span id="count" className="count mx-2">
                    1
                  </span>
                  <button id="plus" className="plus border border-0 px-2">
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
                  />
                </div>
              </div>
              <p className="product-total mt-3">
                Product Total: <span id="item-total">99€</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="summary w-25">
        <p className="sub-total">
          Subtotal &nbsp;<span id="sub-total">163.98€</span>
        </p>
        <p className="tax">
          VAT (%19) &nbsp;<span id="tax">29.51€</span>
        </p>
        <p className="shipping">
          <span id="shipping-info">Shipping</span>&nbsp;
          <span id="shipping-price">8€</span>
        </p>
        <p className="total">
          Total (VAT included) &nbsp;<span id="total">201.49€</span>
        </p>
      </section>
    </div>
  );
};

export default ProductList;
