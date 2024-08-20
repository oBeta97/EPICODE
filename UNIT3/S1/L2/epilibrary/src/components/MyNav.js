import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Component } from 'react'

class MyNav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">EPILIBRARY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ms-auto text-center">
                            <Nav.Link href="#">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#">
                                About
                            </Nav.Link>
                            <Nav.Link href="#">
                                Browse
                            </Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    };
}

export default MyNav;