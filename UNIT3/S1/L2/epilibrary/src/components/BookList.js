import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Book from "./Book";

class BookList extends Component {
    render() {
        return (
            <Container>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 my-4">
                    {
                        this.props.books.map((book => {
                            return (
                                <Col key={book.asin}>
                                    <Book data={book} />
                                </Col>
                            );
                        }))
                    }
                </Row>
            </Container>
        );
    }
}

export default BookList;