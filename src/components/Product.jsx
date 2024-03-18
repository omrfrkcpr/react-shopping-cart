import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import notFound from "../assets/notFound.jpeg";

const Product = ({
  id,
  name,
  image,
  price,
  dampingRate,
  amount,
  handleMinus,
  handlePlus,
  handleRemove,
}) => {
  // Check img validity
  const isValidImageUrl = (image) => {
    try {
      new URL(image);
      return true;
    } catch (error) {
      return false;
    }
  };

  // Calculate product price with damping rate
  const calculatePriceWithDamping = (price, dampingRate) => {
    return dampingRate !== 0 && dampingRate >= 0
      ? (price - (price * dampingRate) / 100).toFixed(2)
      : price.toFixed(2);
  };

  // Calculate product total
  const calculateProductTotal = (price, dampingRate, amount) => {
    return dampingRate !== 0 && dampingRate >= 0
      ? ((price - (price * dampingRate) / 100) * amount).toFixed(2)
      : (price * amount).toFixed(2);
  };

  return (
    <li
      className="product list-unstyled d-flex p-2 me-5 mt-3"
      style={{ borderBottom: "1px solid lightgrey" }}
    >
      <div className="product-img">
        <img
          src={isValidImageUrl(image) ? image : notFound}
          alt={name}
          style={{
            width: "180px",
            height: "180px",
            position: "cover",
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
            {calculatePriceWithDamping(price, dampingRate)}€
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
            {calculateProductTotal(price, dampingRate, amount)}
          </span>
        </p>
      </div>
    </li>
  );
};

export default Product;
