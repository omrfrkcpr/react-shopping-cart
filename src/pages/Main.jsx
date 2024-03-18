import React, { useEffect, useState } from "react";
import bgImgDark from "../assets/bg-image-dark.jpg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [animate, setAnimate] = useState(false);
  const [h1Animate, setH1Animate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // ComponentDidMount()
    setAnimate(true);
    setH1Animate(true);
  }, []);

  const mainStyle = {
    backgroundImage: `url(${bgImgDark})`,
    height: "calc(100vh - 93px)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    textAlign: "center",
    opacity: animate ? 1 : 0,
    transform: animate ? "translateY(0)" : "translateY(-30px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  };

  const h1Style = {
    color: "white",
    transition: "transform 0.5s ease",
    transform: h1Animate ? "translateY(0)" : "translateY(-30px)",
  };

  const btnContainerStyle = {
    opacity: animate ? 1 : 0,
    transform: animate ? "translateX(0)" : "translateX(-50px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  };

  const btnStyle = {
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const handleHover = (e) => {
    e.target.style.backgroundColor = "lightblue";
  };

  const handleHoverOut = (e) => {
    e.target.style.backgroundColor = "white";
  };

  return (
    <div style={mainStyle}>
      <h1 style={h1Style}>Welcome to Shopping Cart Application</h1>
      <div className="btns" style={btnContainerStyle}>
        <button
          style={{ ...btnStyle, marginRight: "1rem" }}
          className="btn"
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
          onClick={() => navigate("/new-product")}
        >
          Add New Product
        </button>
        <button
          style={btnStyle}
          className="btn"
          onMouseOver={handleHover}
          onMouseOut={handleHoverOut}
          onClick={() => navigate("/product-list")}
        >
          See All Products
        </button>
      </div>
    </div>
  );
};

export default Main;
