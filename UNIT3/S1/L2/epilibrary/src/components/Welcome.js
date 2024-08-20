import { Component } from "react";
import { Container, Alert } from "react-bootstrap";


class Welcome extends Component {
    render() {
        return (
            <Container className="my-4">
                <Alert variant="primary" className="text-center">
                    Welcome to EPILIBRARY!
                </Alert>
            </Container>
        );
    }
}

export default Welcome;