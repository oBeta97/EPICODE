import { ListGroup, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";


const SingleComment = (props) => {

    const deleteNewComment = (commentId) => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3Mjk3NTI4YWI5NjAwMTU2NjRmMDgiLCJpYXQiOjE3MjQzMjgzMDksImV4cCI6MTcyNTUzNzkwOX0.luBPQ1KaA-TY0VDGkkeLx8G7NIYOaJGorlrpGRasgdE",
                "Content-type": "application/json"
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
                props.refresh();
            })
            .catch((error) => {
                console.error(error);
                props.isLoading(false);
                props.fetchError(true);
            })
    }

    return (
        <ListGroup.Item className="bg-dark text-light">
            {props.commentData.comment}
            <Button
                size="sm"
                variant="danger"
                onClick={() => {
                    console.log('delete')
                    deleteNewComment(props.commentData._id)
                }}
                style={{ float: "right" }}
            >
                <Trash />
            </Button>
        </ListGroup.Item>
    );
}

export default SingleComment;