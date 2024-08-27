import { ListGroup, Alert, Button, InputGroup, Form } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import SingleComment from "./SingleComment";

const CommentList = (props) => {

    const AddNewComment = (commentText) => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3Mjk3NTI4YWI5NjAwMTU2NjRmMDgiLCJpYXQiOjE3MjQzMjgzMDksImV4cCI6MTcyNTUzNzkwOX0.luBPQ1KaA-TY0VDGkkeLx8G7NIYOaJGorlrpGRasgdE",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "elementId": props.bookId,
                "comment": commentText,
                "rate": '5'
            }),
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
                props.refresh();
            })
            .catch((error) => {
                console.error(error);
                props.isLoading(false);
                props.fetchError(true);
            })
    }

    return (
        <ListGroup>

            {
                props.comments.length === 0 ? (
                    <ListGroup.Item>
                        <Alert variant="warning">
                            No comments here :(
                        </Alert>
                    </ListGroup.Item>
                ) : (
                    <>
                        {
                            props.comments.map((comment) =>
                                <SingleComment
                                    key={comment._id}
                                    commentData={comment}
                                />
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
                            AddNewComment(e.target.closest('.input-group').querySelector('textarea').value);
                            e.target.closest('.input-group').querySelector('textarea').value = "";
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
    )

}


export default CommentList