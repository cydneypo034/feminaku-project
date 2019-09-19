import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';


class NavBar extends React.Component {
    render() {
        return (
           <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Feminaku</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/adduser">Add User</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar> 
        )
    }

}

export default NavBar;
