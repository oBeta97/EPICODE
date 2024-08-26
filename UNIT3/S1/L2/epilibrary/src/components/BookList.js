import { Component } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Book from "./Book";
import BookComments from "./BookComments";

class BookList extends Component {

    state = {
        selectedBookId: 0,
    }

    UpdateBookId = (bookAsin) => {
        this.setState({
            ...this.state,
            selectedBookId: bookAsin,
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 my-4">
                            {
                                this.props.books.map((book => {
                                    return (
                                        <Col key={book.asin}>
                                            <Book
                                                data={book}
                                                onBookClick={(bookAsin) => this.UpdateBookId(bookAsin)}
                                                selectedBook={this.state.selectedBookId}
                                            />
                                        </Col>
                                    );
                                }))
                            }
                        </Row>
                    </Col>
                    <Col className="col-3">
                        {
                            this.state.selectedBookId ? (
                                <BookComments
                                    bookId={this.state.selectedBookId}
                                    onCloseClick={() => this.UpdateBookId(0)}
                                />
                            ) :
                                (
                                    <Alert variant="warning" className="my-5">
                                        No book selected 🥸
                                    </Alert>
                                )
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BookList;