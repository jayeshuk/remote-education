import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import img from "../Data/Images/logo3.png";
import LoginModal from "../Components/HomePage/LoginModal";
import CreateAccModal from "../Components/HomePage/CreateAccModal";

export default function NavigationBar() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <>
      <Navbar fixed="top" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            src={img}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Edumote logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home" style={{ fontSize: "30px" }}>
          Edumote
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={{ fontSize: "20px" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#features" style={{ fontSize: "20px" }}>
            Features
          </Nav.Link>
          <Nav.Link href="#pricing" style={{ fontSize: "20px" }}>
            Pricing
          </Nav.Link>
          <Nav.Link href="#contactus" style={{ fontSize: "20px" }}>
            Contact Us
          </Nav.Link>
          <Nav.Link href="#about" style={{ fontSize: "20px" }}>
            About
          </Nav.Link>
        </Nav>
        <Nav className="mr-right">
          <Nav.Item className="mr-sm-2">
            <Button
              variant="outline-primary"
              onClick={() => setModalShow(true)}
            >
              Log In
            </Button>{" "}
            <Button
              variant="outline-secondary"
              onClick={() => setModalShow2(true)}
            >
              Create Account
            </Button>{" "}
          </Nav.Item>
        </Nav>
      </Navbar>

      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <CreateAccModal show={modalShow2} onHide={() => setModalShow2(false)} />
    </>
  );
}
