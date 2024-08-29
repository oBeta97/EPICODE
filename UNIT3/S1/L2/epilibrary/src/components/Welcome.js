import { Container, Alert } from "react-bootstrap";


const Welcome = (props) => {
    return (
        <Container className="my-4">
            <Alert
                variant="primary"
                className="text-center"
                data-testid="welcome-alert"
            >
                Welcome to EPILIBRARY!
            </Alert>
        </Container>
    );
}

export default Welcome;