import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div>
            <Navbar bg="danger" variant="dark" expand="lg">
                
                <LinkContainer to="/">
                    <Navbar bg="" variant="dark">
                    <Navbar.Brand>
                        <i className="fas fa-tape"></i>Hoang's Movies
                    </Navbar.Brand>
                    </Navbar>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/search">
                            <Nav.Link>Result</Nav.Link>
                        </LinkContainer>
                    </Nav>

                    
                            <SearchBar />
                        

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;