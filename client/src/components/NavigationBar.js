import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';



class NavBar extends React.Component {
    render() {
        return (
           <Navbar expand="lg" className="navbar-div">
            <Navbar.Brand href="/" className="navbar-title">Feminaku</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/users">users</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar> 
        )
    }

}

export default NavBar;
