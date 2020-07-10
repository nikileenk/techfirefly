import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './CompStyle.css';

import {
    Link
} from 'react-router-dom'
class NavBar extends Component {

    render() {

        
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Firefly APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            
                        </Nav>
                        {
                                localStorage.getItem('login') ?
                                    <Link to="/logout" style={{float:"right"}}> Logout </Link>

                                    :
                                    <Link to="/login" style={{float:"right"}}> Login </Link>
                            }
                    </Navbar.Collapse>
                </Navbar>

                        


               
            </>
        );
    }
}

export default NavBar;