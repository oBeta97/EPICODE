import { useEffect, useState } from "react";
import { Alert, Card, Spinner } from "react-bootstrap";
import CommentList from "./CommentList";


const BookComments = (props) => {

    const [isLoading, setIsLoading] = useState();
    const [commentList, setCommentList] = useState([]);
    const [fetchError, setFetchError] = useState();


    useEffect(() => getComments(), [props])

    function getComments() {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.bookId}`, {
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
                // console.log(bookComments);
                setIsLoading(false);
                setCommentList(bookComments);
                setFetchError(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
                setFetchError(true);
            })
    }

    return (
        <Card.Body className="position-relative py-4">
            <Card.Title>Comments:</Card.Title>
            <span
                className="btn btn-outline-dark position-absolute"
                style={{ top: "5px", right: "5px" }}
                onClick={(e) => {
                    props.onCloseClick();
                }}
            >
                X
            </span>

            {
                isLoading ? (
                    <Spinner animation="grow" variant="info" />
                ) :
                    fetchError ? (
                        <Alert variant="danger">
                            Something went wrong! D:
                        </Alert>
                    ) :
                        (
                            <CommentList
                                bookId={props.bookId}
                                comments={commentList}
                                refresh={() => getComments()}
                                isLoading={(state) => setIsLoading(state)}
                                fetchError={(state) => setFetchError(state)}
                            />
                        )
            }

        </Card.Body >

    )

};

export default BookComments;