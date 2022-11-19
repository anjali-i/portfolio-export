import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
// import Logo from "../../assets/icons/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        className="animate-navbar nav-theme justify-content-between"
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#qualification">Qualification</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
