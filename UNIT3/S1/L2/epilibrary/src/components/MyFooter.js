import { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";


class MyFooter extends Component {

    render() {
        return (
            <Container fluid className="bg-dark text-secondary text-center d-flex flex-column align-items-center">
                <p className="my-0">
                    EPILIBRARY &copy; {new Date().getFullYear()}
                </p>
                <ListGroup horizontal="sm" className="my-0">
                    <ListGroup.Item className="bg-dark text-secondary border-0">
                        Cookie
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-dark text-secondary border-0">
                        Contact Us!
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-dark text-secondary border-0">
                        Donate
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        );
    }
}


export default MyFooter;