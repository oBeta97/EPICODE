import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";


class BookComments extends Component {

    state = {
        isLoading: true,
    };

    render() {
        return (
            <Card.Body className="position-relative py-4">
                <Card.Title>Comments:</Card.Title>
                <span
                    className="btn btn-outline-dark position-absolute"
                    style={{ top: "5px", right: "5px" }}
                    onClick={(e) => {
                        this.setState({
                            active: !this.state.active,
                            showComments: false,
                        })
                    }}
                >
                    X
                </span>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card.Body>
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
             .then((bookComments)=>{
                console.log(bookComments)
             })
    }
}


export default BookComments;