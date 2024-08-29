import { InputGroup, Form } from "react-bootstrap";


const SearchBook = (props) => {
    return (
        <InputGroup className="mb-3" data-testid="search-bar">
            <InputGroup.Text id="searchBook">
                S
            </InputGroup.Text>
            <Form.Control
                placeholder="Search a book"
                aria-label="search"
                aria-describedby="searchBook"
                onChange={(event) => props.onInputChange(event.target.value)}
            />
        </InputGroup>

    );
}

export default SearchBook;