import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';


const Header = () => {
    const { user, logOut } = useFirebase()
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/home" className="navbar-brand">FoodPanda</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link active" to="/home">Home</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                        {user?.email && <button onClick={logOut} className="btn btn-outline-danger">Log out</button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;