import { Component } from "react";
import { Card } from "react-bootstrap";


class Book extends Component {

    state = {
        active: false,
    };

    componentDidUpdate = (lastProps, lastState) => {
        if (lastProps.selectedBook !== this.props.data.asin && lastProps !== this.props)
            this.setState({
                ...this.state,
                active: false,
            })
    };

    render() {
        return (
            <Card
                style={{ height: '30rem', overflowY: "auto" }}
                className={
                    this.state.active ? "border-2 border-danger" : ""
                }
            >

                <Card.Img
                    variant="top"
                    src={this.props.data.img}
                    className="img-fluid"
                    style={{ maxHeight: "65%" }}
                    onClick={() => {
                        this.setState({
                            active: !this.state.active,
                        })

                        this.props.onBookClick(
                            !this.state.active ?
                                this.props.data.asin :
                                0
                        )
                    }}
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