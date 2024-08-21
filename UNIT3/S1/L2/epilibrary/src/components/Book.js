import { Component } from "react";
import { Card } from "react-bootstrap";

class Book extends Component {

    state = {
        active: false,
    }


    render() {
        return (
            <Card
                style={{ width: '18rem' }}
                className={
                    this.state.active ? "border-2 border-danger h-100 d-flex flex-column" : "h-100 d-flex flex-column"
                }
            >
                <Card.Img
                    variant="top"
                    src={this.props.data.img}
                    className="img-fluid"
                    onClick={() =>
                        this.setState({
                            active: !this.state.active,
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
            </Card>
        );
    }
}

export default Book;