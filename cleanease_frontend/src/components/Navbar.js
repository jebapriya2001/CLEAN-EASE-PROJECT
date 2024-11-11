// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, } from 'react-bootstrap';


function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">CleanEase</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Categories</Nav.Link>
                    <Nav.Link as={Link} to="/search">Search & Filter</Nav.Link>
                    <Nav.Link as={Link} to="/checklist">Checklist</Nav.Link>
                    <Nav.Link as={Link} to="/schedule">Schedule Appointment</Nav.Link>
                    <Nav.Link as={Link} to="/payment">Payment</Nav.Link>
                    <Nav.Link as={Link} to="/reminders">Reminders</Nav.Link>
                    <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
