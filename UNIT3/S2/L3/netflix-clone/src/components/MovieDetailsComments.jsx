import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Container, ListGroup, Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";

const MovieDetailsComments = (props) => {

    const [isLoading, setIsLoading] = useState();
    const [commentList, setCommentList] = useState([]);
    const [fetchError, setFetchError] = useState();

    useEffect(
        () => {
            getComments()
        }, []
    )

    function getComments() {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.movieId}`, {
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
                setTimeout(() => {
                    setIsLoading(false);
                    setCommentList(bookComments);
                    setFetchError(false);
                }, 500);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
                setFetchError(true);
            })
    }



    return (
        <Container fluid  >
            {
                isLoading ? (
                    <Spinner className="m-auto my-5" animation="grow" variant="danger" />
                ) : fetchError ? (
                    <Alert variant="danger">
                        Something went wrong! :(
                    </Alert>
                ) : (
                    <ListGroup>
                        {
                            commentList.length === 0 ? (
                                <ListGroup.Item className="bg-dark">
                                    <Alert variant="warning">No comments here D:</Alert>
                                </ListGroup.Item>
                            ) : (
                                commentList.map(comment =>
                                    // <ListGroup.Item className="bg-dark text-light">
                                    //     {comment.comment}
                                    // </ListGroup.Item>
                                    <SingleComment
                                        key={comment._id}
                                        commentData={comment}
                                        refresh={() => {
                                            setIsLoading(true)
                                            getComments()
                                        }}
                                        isLoading={(state) => setIsLoading(state)}
                                        fetchError={(state) => setFetchError(state)}
                                    />
                                )
                            )
                        }
                        <AddComment
                            movieId={props.movieId}
                            refresh={() => {
                                setIsLoading(true)
                                getComments()
                            }}
                            isLoading={(state) => setIsLoading(state)}
                            fetchError={(state) => setFetchError(state)}
                        />
                    </ListGroup>
                )
            }

        </Container>
    );
};

export default MovieDetailsComments