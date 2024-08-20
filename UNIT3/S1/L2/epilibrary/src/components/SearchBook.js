import { Component } from "react";
import { InputGroup, Form } from "react-bootstrap";


class SearchBook extends Component {
    render() {
        return (
            <InputGroup className="mb-3">
                <InputGroup.Text id="searchBook">
                    S
                </InputGroup.Text>
                <Form.Control
                    placeholder="Search a book"
                    aria-label="search"
                    aria-describedby="searchBook"
                    onChange={(event) => this.props.onInputChange(event.target.value)}
                />
            </InputGroup>

        );
    }
}

export default SearchBook;