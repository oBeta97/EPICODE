import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyHeader = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="text-decoration-none text-black">
                        Space Magazine
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Form>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">
                                    <FaSearch />
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder="Cerca una news"
                                />
                            </InputGroup>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyHeader;