import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect} from 'react';
import "../App.css";
import logo from '../static/gc-logo.png'




export function Navigation() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    
    <div>
    <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="app-logo" href="/">
            <img
              src={logo}
              width="50"
              style={{ marginLeft: "20px" }}
            />
            </Navbar.Brand>
            <Navbar.Brand href="/" >Batangas Medical Center</Navbar.Brand>
          <Nav className="me-auto">
          {isAuth ?
            <Nav.Link href="/"></Nav.Link>
            : null}
          </Nav>
          <Nav>
          {isAuth ?
            <Nav.Link href="/logout" style={{ marginRight: "20px" }}>Logout</Nav.Link>:
            <Nav.Link href="/login">Login</Nav.Link>
          }
          </Nav>
      </Navbar>
    </div>
  );
}
