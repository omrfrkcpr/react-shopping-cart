import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbar-component py-1"
      style={{
        background: "linear-gradient(to right, lightblue, rgb(47, 163, 202))",
      }}
    >
      <Container>
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink
              to="/home"
              className="nav-link fw-bold"
              style={({ isActive }) => ({
                color: isActive && "white",
                marginRight: "1rem",
                marginLeft: "auto",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/new-product"
              className="nav-link fw-bold"
              style={({ isActive }) => ({
                color: isActive && "white",
                marginRight: "1rem",
                marginLeft: "auto",
              })}
            >
              New Product
            </NavLink>
            <NavLink
              to="/product-list"
              className="nav-link fw-bold"
              style={({ isActive }) => ({
                color: isActive && "white",
                marginRight: "1rem",
                marginLeft: "auto",
              })}
            >
              Product List
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link fw-bold"
              style={({ isActive }) => ({
                color: isActive && "white",
                marginRight: "1rem",
                marginLeft: "auto",
              })}
            >
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
