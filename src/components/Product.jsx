import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import notFound from "../assets/notFound.jpeg";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Product = ({
  id,
  index,
  product,
  handleMinus,
  handlePlus,
  handleRemove,
  containerWidth,
}) => {
  const navigate = useNavigate();
  const { name, image, price, dampingRate, amount } = product;

  // Check img validity
  const isValidImageUrl = (image) => {
    try {
      new URL(image);
      return true;
    } catch (error) {
      return false;
    }
  };

  const calculatePrice = (price) => {
    if (!isNaN(price) && parseFloat(price) % 1 !== 0) {
      return parseFloat(price).toFixed(2);
    }
    return price;
  };
  const calculatePriceWithDamping = (price, dampingRate) => {
    const discountedPrice = price - (price * dampingRate) / 100;
    return dampingRate !== 0 && dampingRate >= 0
      ? calculatePrice(discountedPrice)
      : calculatePrice(price);
  };

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
      <div
        className={`product-index d-flex align-items-center justify-content-center ${
          containerWidth >= "90%" ? "pe-3" : "pe-4"
        }   ${containerWidth >= "90%" ? "fs-6" : "fs-4"}`}
      >
        <p>{index}</p>
      </div>
      <div className="product-img d-flex align-items-center justify-content-center">
        <img
          src={isValidImageUrl(image) ? image : notFound}
          alt={name}
          style={{
            width: containerWidth >= "90%" ? "130px" : "180px",
            height: containerWidth >= "90%" ? "130px" : "180px",
            position: "cover",
            border: "1px solid lightgrey",
            borderRadius: "10px",
            padding: ".5rem",
          }}
        />
      </div>
      <div className="product-info ms-4 d-flex flex-column align-items-start justify-content-center">
        <h3
          className="product-name"
          style={{ fontSize: containerWidth >= "90%" ? "1rem" : "" }}
        >
          {name}
        </h3>
        <p className="product-prices">
          <span
            id="discount"
            className="ps-0 p-1"
            style={{ fontSize: containerWidth >= "90%" ? "1rem" : "1.5rem" }}
          >
            {calculatePriceWithDamping(price, dampingRate)}€
          </span>
          <span
            id="price"
            className="text-decoration-line-through p-1 "
            style={{
              backgroundColor: "yellow",
              fontSize: containerWidth >= "90%" ? ".8rem" : "1.2rem",
            }}
          >
            {calculatePrice(price)}€
          </span>
        </p>
        <div className="product-settings d-flex">
          <div className="product-count border border-1 border-black py-1 px-2 rounded-1">
            <button
              id="minus"
              className={`minus border border-0 ${
                containerWidth >= "90%" ? "px-0" : "px-2"
              } `}
              onClick={() => handleMinus(id)}
            >
              -
            </button>
            <span id="count" className="count mx-2">
              {amount}
            </span>
            <button
              id="plus"
              className={`plus border border-0 ${
                containerWidth >= "90%" ? "px-0" : "px-2"
              } `}
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
          <div className="product-edit">
            <FaEdit
              style={{
                fontSize: "18px",
                color: "orange",
                marginLeft: ".6rem",
                marginTop: ".5rem",
              }}
              type="button"
              onClick={() =>
                navigate("/update-product", {
                  state: { product },
                })
              }
            />
          </div>
        </div>
        <p className="product-total mt-3">
          Product Total:{" "}
          <span id="product-total">
            {calculateProductTotal(price, dampingRate, amount)}€
          </span>
        </p>
      </div>
    </li>
  );
};

export default Product;
