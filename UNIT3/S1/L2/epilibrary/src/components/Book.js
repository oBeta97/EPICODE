import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

import BookComments from "./BookComments";

class Book extends Component {

    state = {
        active: false,
        showComments: false,
    }


    render() {
        return (
            <Card
                style={{ height: '30rem', overflowY: "auto" }}
                className={
                    this.state.active ? "border-2 border-danger" : ""
                }
            >
                {!this.state.showComments ? (
                    <>
                        <Card.Img
                            variant="top"
                            src={this.props.data.img}
                            className="img-fluid"
                            style={{ maxHeight: "65%" }}
                            onClick={() =>
                                this.setState({
                                    active: !this.state.active,
                                    showComments: true,
                                })}
                        />
                        <Card.Body>
                            <Card.Title>{this.props.data.title}</Card.Title>
                            <Card.Text className="small">
                                Price: {this.props.data.price}€
                            </Card.Text>
                            <Card.Text className="small">
                                Category: {this.props.data.category}
                            </Card.Text>
                        </Card.Body>
                    </>
                ) : (
                    <BookComments
                        bookId={this.props.data.asin}
                        onCloseClick={() => {this.setState({
                            active: !this.state.active,
                            showComments: false,
                        })}}
                    />
                )}

            </Card>
        );
    }
}

export default Book;