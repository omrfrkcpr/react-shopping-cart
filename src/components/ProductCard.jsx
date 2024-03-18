import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Products from "./Products";
import Summary from "./Summary";

const ProductCard = () => {
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

  return (
    <div className="d-flex justify-content-between container">
      {products.length > 0 ? (
        <Products
          products={products}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          handleRemove={handleRemove}
        />
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
      <Summary
        totalAmount={totalAmount}
        totalTax={totalTax}
        products={products}
        navigate={navigate}
      />
    </div>
  );
};

export default ProductCard;
