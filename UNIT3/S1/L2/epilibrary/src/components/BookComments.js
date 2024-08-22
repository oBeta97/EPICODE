import { Component } from "react";
import { Alert, Card, ListGroup, Spinner, InputGroup, Form, Button } from "react-bootstrap";


class BookComments extends Component {

    state = {
        isLoading: true,
        commentList: [],
        fetchError: false,
    };

    render() {
        return (
            <Card.Body className="position-relative py-4">
                <Card.Title>Comments:</Card.Title>
                <span
                    className="btn btn-outline-dark position-absolute"
                    style={{ top: "5px", right: "5px" }}
                    onClick={(e) => {
                        this.props.onCloseClick();
                    }}
                >
                    X
                </span>
                <ListGroup>

                    {
                        this.state.isLoading ? <Spinner animation="grow" variant="info" /> : ""
                    }

                    {
                        !this.state.isLoading && this.state.fetchError ? (
                            <ListGroup.Item>
                                <Alert variant="danger">
                                    Something went wrong! D:
                                </Alert>
                            </ListGroup.Item>
                        ) : ""
                    }

                    {
                        this.state.commentList.length === 0 && !this.state.isLoading && !this.state.fetchError ? (
                            <ListGroup.Item>
                                <Alert variant="warning">
                                    No comments here :(
                                </Alert>
                            </ListGroup.Item>
                        ) : (
                            <>
                                {
                                    this.state.commentList.map((comment) =>
                                        <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>
                                    )
                                }
                            </>
                        )
                    }
                    <ListGroup.Item className="p-0">
                        <InputGroup>
                            <Button
                                variant="info"
                                type="submit"
                                onClick={(e) => { 
                                    this.AddNewComment(e.target.closest('.input-group').querySelector('textarea').value);
                                }}
                            >
                                <span className="small">
                                    Add comment
                                </span>
                            </Button>
                            <Form.Control required as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </ListGroup.Item>

                </ListGroup>

            </Card.Body >

        )
    };

    componentDidMount = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3Mjk3NTI4YWI5NjAwMTU2NjRmMDgiLCJpYXQiOjE3MjQzMjgzMDksImV4cCI6MTcyNTUzNzkwOX0.luBPQ1KaA-TY0VDGkkeLx8G7NIYOaJGorlrpGRasgdE"
            }
        })
            .then((response) => {
                if (response.ok) {
                    // la chiamata ha tornato 200
                    return response.json()
                } else {
                    // la chiamata ha tornato 400, 401, 403, 404, 500
                    throw new Error('La chiamata non è andata a buon fine')
                }
            })
            .then((bookComments) => {
                console.log(bookComments);
                this.setState({
                    isLoading: false,
                    commentList: bookComments,
                    fetchError: false
                });
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    isLoading: false,
                    fetchError: true
                })
            })
    }


    AddNewComment = (commentText) => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
            method: "POST",
            body: JSON.stringify({
                elementId: this.props.bookId,
                comment: commentText,
                rate:5,
                author: 'cicciopasticcio@rigatoni.pasta',
                createdAt: new Date(),
            }),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3Mjk3NTI4YWI5NjAwMTU2NjRmMDgiLCJpYXQiOjE3MjQzMjgzMDksImV4cCI6MTcyNTUzNzkwOX0.luBPQ1KaA-TY0VDGkkeLx8G7NIYOaJGorlrpGRasgdE"
            }
        })
            .then((response) => {
                if (response.ok) {
                    // la chiamata ha tornato 200
                    return response.json()
                } else {
                    // la chiamata ha tornato 400, 401, 403, 404, 500
                    throw new Error('La chiamata non è andata a buon fine')
                }
            })
            .then((bookComments) => {
                console.log(bookComments);
                this.setState({
                    isLoading: false,
                    commentList: bookComments,
                    fetchError: false
                });
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    isLoading: false,
                    fetchError: true
                })
            })
    }
}


export default BookComments;