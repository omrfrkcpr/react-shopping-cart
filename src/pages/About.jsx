import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
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

  const InfoSection = ({ title, children }) => (
    <>
      <h6 className="mt-1">{title}</h6>
      <p>{children}</p>
    </>
  );

  const SocialLink = ({ href, icon }) => (
    <li>
      <a href={href} className="text-black">
        {icon}
      </a>
    </li>
  );

  return (
    <div
      style={{ ...aboutDivStyle, paddingBottom: "2.05rem" }}
      className="pt-4"
    >
      <div
        className="about-container m-auto bg-white p-3"
        style={{ maxHeight: "80vh", overflow: "auto", width: "95%" }}
      >
        <div className="about-info">
          <h3 className="text-center mt-2 text-danger fs-3">
            About Our Shopping Mall
          </h3>
          <h5 className="mt-3 text-center">
            Welcome to Shopping Mall, your premier destination for shopping,
            dining, and entertainment!
          </h5>
          <InfoSection title="History">
            Shopping Mall opened its doors to the public in 2005, with the
            vision of providing a one-stop destination for all shopping needs.
            Since then, we have been a cornerstone of the community, offering a
            diverse range of retail outlets, restaurants, and leisure
            facilities.
          </InfoSection>
          <InfoSection title="Our Mission">
            At Shopping Mall, our mission is to provide an unparalleled shopping
            experience that delights and inspires our visitors. We are committed
            to offering the latest trends, exceptional customer service, and a
            vibrant atmosphere that makes every visit memorable.
          </InfoSection>
          <InfoSection title="Future Vision">
            As we look to the future, Shopping Mall remains dedicated to
            innovation and excellence. We are constantly exploring new ways to
            enhance the shopping experience, embrace sustainability practices,
            and contribute to the prosperity of our community. Thank you for
            choosing Shopping Mall as your preferred destination for shopping
            and leisure. We look forward to serving you for many years to come!
          </InfoSection>
        </div>
        <ul
          className="about-socials list-unstyled d-flex justify-content-between m-auto mt-4"
          style={{ width: "80%", maxWidth: "300px" }}
        >
          <SocialLink
            href="https://github.com/omrfrkcpr"
            icon={<IoLogoGithub style={{ fontSize: "3rem" }} />}
          />
          <SocialLink
            href="https://www.linkedin.com/in/omrfrkcpr/"
            icon={<FaLinkedin style={{ color: "#0A66C2", fontSize: "3rem" }} />}
          />
          <SocialLink
            href="#google"
            icon={<FcGoogle style={{ fontSize: "3rem" }} />}
          />
          <SocialLink
            href="#facebook"
            icon={<FaFacebook style={{ color: "#0866ff", fontSize: "3rem" }} />}
          />
          <SocialLink
            href="#instagram"
            icon={
              <FaInstagramSquare
                style={{ color: "#F6753F", fontSize: "3rem" }}
              />
            }
          />
        </ul>
        <div className="about-buttons text-center mt-4">
          <button className="btn bg-warning me-3">Follow Us</button>
          <button className="btn bg-warning">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default About;
