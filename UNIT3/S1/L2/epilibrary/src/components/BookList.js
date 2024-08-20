import { Component } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";



class BookList extends Component {
    render() {
        return (
            <Container>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3">
                    {
                        this.props.books.map((book => {
                            return (
                                <Col key={book.asin}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={book.img} className="img-fluid" />
                                        <Card.Body>
                                            <Card.Title>{book.title}</Card.Title>
                                            <Card.Text className="small">
                                                Price: {book.price}€
                                            </Card.Text>
                                            <Card.Text className="small">
                                                Category: {book.category}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
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