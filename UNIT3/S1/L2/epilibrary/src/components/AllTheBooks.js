import { Component } from "react";
import BookList from "./BookList";

class AllTheBooks extends Component {
    render() {
        return <BookList books={this.props.category} />
    }
}

export default AllTheBooks;