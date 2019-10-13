import React from 'react';
import { Nav, Navbar, NavDropdown,Form, FormControl,Button } from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/" className="navbar-brand">Feminaku</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/allusers">All Users</Nav.Link>
                    <Nav.Link href="/create">Create User</Nav.Link>
                    <NavDropdown title="All Anime" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/allanime">All Anime</NavDropdown.Item>
                        <NavDropdown.Item href="/createAnime">Create Anime</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="View Merch" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/allclothes">All Merch</NavDropdown.Item>
                        <NavDropdown.Item href="/createClothes">Create Merch</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
                
        )
    }
}

export default Navigation;
