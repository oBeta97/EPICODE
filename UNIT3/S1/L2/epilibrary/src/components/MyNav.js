import { Navbar, Container, Nav } from "react-bootstrap";

const MyNav = (props) => {
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default MyNav;