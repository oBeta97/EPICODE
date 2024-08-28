import { useState } from "react";
import { ListGroup, Button, InputGroup, Form } from "react-bootstrap";


const AddComment = (props) => {

    const [formInput, setFormInput] = useState(
        {
            "elementId": props.movieId,
            "comment": '',
            "rate": '5'
        }
    );

    const AddNewComment = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3Mjk3NTI4YWI5NjAwMTU2NjRmMDgiLCJpYXQiOjE3MjQzMjgzMDksImV4cCI6MTcyNTUzNzkwOX0.luBPQ1KaA-TY0VDGkkeLx8G7NIYOaJGorlrpGRasgdE",
                "Content-type": "application/json"
            },
            body: JSON.stringify(formInput),
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
        <ListGroup.Item className="p-0">
            <InputGroup>
                <Button
                    variant="danger"
                    type="submit"
                    onClick={() => {
                        AddNewComment(formInput);
                        setFormInput({
                            ...formInput,
                            comment: ""
                        });
                    }}
                >
                    <span className="small">
                        +
                    </span>
                </Button>
                <Form.Control
                    required
                    as="textarea"
                    aria-label="With textarea"
                    value={formInput.comment}
                    onChange={(e) => 
                        setFormInput({
                            ...formInput,
                            comment: e.target.value
                        })}
                    className="bg-dark text-light"
                />
            </InputGroup>
        </ListGroup.Item>
    );
};

export default AddComment;