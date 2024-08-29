import { ListGroup, Alert } from "react-bootstrap";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";

const CommentList = (props) => {

    return (
        <ListGroup data-testid="comment-list">

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
                                    refresh={() => props.refresh()}
                                    isLoading={(state) => props.isLoading(state)}
                                    fetchError={(state) => props.fetchError(state)}
                                />
                            )
                        }
                    </>
                )
            }
            <AddComment
                bookId={props.bookId}
                refresh={() => props.refresh()}
                isLoading={(state) => props.isLoading(state)}
                fetchError={(state) => props.fetchError(state)}
            />

        </ListGroup>
    )

}


export default CommentList