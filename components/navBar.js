import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useAuth } from "../context/authContext";
const NavBar = () => {
    const{logOut}=useAuth();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <i className="fas fa-home d-inline-block mx-2" />
        </Navbar.Brand>
        <button className="btn btn-secondary" onClick={() => logOut()}>Log Out</button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
