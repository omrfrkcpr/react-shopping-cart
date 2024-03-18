import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import aboutBg from "../assets/about-bg.jpg";

const About = () => {
  const aboutDivStyle = {
    backgroundImage: `url(${aboutBg})`,
    height: "calc(100vh - 93px)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={aboutDivStyle} className="pt-5 pb-4">
      <div className="w-75 m-auto bg-white p-3">
        <div className="about-info">
          <h3 className="text-center mt-4 text-danger fs-1">
            About Our Shopping Mall
          </h3>
          <h5 className="mt-3 p-1 text-center">
            Welcome to Shopping Mall, your premier destination for shopping,
            dining, and entertainment! Here's a brief history of our mall:
          </h5>
          <h6 className="mt-4 p-1">History</h6>
          <p className=" p-1">
            Shopping Mall opened its doors to the public in 2005, with the
            vision of providing a one-stop destination for all shopping needs.
            Since then, we have been a cornerstone of the community, offering a
            diverse range of retail outlets, restaurants, and leisure
            facilities.
          </p>
          <h6 className="mt-1 p-1">Growth and Expansion</h6>
          <p className=" p-1">
            Over the years, Shopping Mall has undergone several expansions and
            renovations to meet the evolving needs of our customers. What
            started as a modest shopping center has now transformed into a
            sprawling complex, featuring hundreds of stores and amenities.
          </p>
          <h6 className="mt-1 p-1">Our Mission</h6>
          <p className=" p-1">
            At Shopping Mall, our mission is to provide an unparalleled shopping
            experience that delights and inspires our visitors. We are committed
            to offering the latest trends, exceptional customer service, and a
            vibrant atmosphere that makes every visit memorable.
          </p>
          <h6 className="mt-1 p-1">Community Engagement</h6>
          <p className=" p-1">
            We take pride in our strong ties to the local community. Shopping
            Mall regularly hosts events, fundraisers, and cultural celebrations
            to bring people together and support worthy causes. We believe in
            giving back and making a positive impact on the lives of those
            around us.
          </p>
          <h6 className="mt-1 p-1">Future Vision</h6>
          <p className=" p-1">
            As we look to the future, Shopping Mall remains dedicated to
            innovation and excellence. We are constantly exploring new ways to
            enhance the shopping experience, embrace sustainability practices,
            and contribute to the prosperity of our community. Thank you for
            choosing Shopping Mall as your preferred destination for shopping
            and leisure. We look forward to serving you for many years to come!
          </p>
        </div>
        <ul
          className="about-socials list-unstyled d-flex justify-content-between mx-auto mt-5"
          style={{ width: "35%" }}
        >
          <li>
            <a href="https://github.com/omrfrkcpr" className="text-black">
              <IoLogoGithub style={{ fontSize: "50px", cursor: "pointer" }} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/omrfrkcpr/"
              style={{ color: "#0A66C2" }}
            >
              <FaLinkedin style={{ fontSize: "50px", cursor: "pointer" }} />
            </a>
          </li>
          <li>
            <a href="#google">
              <FcGoogle style={{ fontSize: "50px", cursor: "pointer" }} />
            </a>
          </li>
          <li>
            <a href="#facebook" style={{ color: "#0866ff" }}>
              <FaFacebook style={{ fontSize: "50px", cursor: "pointer" }} />
            </a>
          </li>
          <li>
            <a href="#instagram" style={{ color: "#F6753F" }}>
              <FaInstagramSquare
                style={{ fontSize: "50px", cursor: "pointer" }}
              />
            </a>
          </li>
        </ul>
        <div className="about-buttons text-center mt-5">
          <button className="btn bg-warning me-3">Follow Us</button>
          <button className="btn bg-warning">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default About;
