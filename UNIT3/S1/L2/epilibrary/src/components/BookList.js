import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Book from "./Book";
import BookComments from "./BookComments";

const BookList = (props) => {

    const [selectedBookId, setSelectedBookId] = useState(0);

    const UpdateBookId = (bookAsin) => {
        console.log('aggiornato bookId: ', bookAsin)
        setSelectedBookId(bookAsin);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 my-4">
                        {
                            props.books.map((book => {
                                if(selectedBookId === book.asin){
                                    console.log('selectedBookId', selectedBookId)
                                    console.log('book.asin', book.asin)
                                }

                                return (
                                    <Col key={book.asin}>
                                        <Book
                                            data={book}
                                            onBookClick={(bookAsin) => UpdateBookId(bookAsin)}
                                            selectedBook={selectedBookId === book.asin ? true : false}
                                        />
                                    </Col>
                                );
                            }))
                        }
                    </Row>
                </Col>
                <Col className="col-3">
                    {
                        selectedBookId ? (
                            <BookComments
                                bookId={selectedBookId}
                                onCloseClick={() => UpdateBookId(0)}
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

export default BookList;