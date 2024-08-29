import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe('Check if the BookList component works fine', () => {
    it('mounts correctly', () => {
        
        render( <App />)

        const searchBar = screen.getByTestId('search-bar');

        expect(searchBar).toBeInTheDocument();
    
    });

    it('cheks if the searchbar filter the books', () => {
        render( <App />)

        const nrOfBooksBeforeSearch = screen.getAllByTestId('booklist-col').length;

        const searchBarInput = screen.getByPlaceholderText('Search a book');
        fireEvent.change(searchBarInput, {target: {value: 'witcher'}});

        const nrOfBooksAfterFirstSearch = screen.getAllByTestId('booklist-col').length;

        expect(nrOfBooksBeforeSearch).toBeGreaterThan(nrOfBooksAfterFirstSearch);

        fireEvent.change(searchBarInput, {target: {value: 'wi'}});

        const nrOfBooksAfterSecondSearch = screen.getAllByTestId('booklist-col').length
        
        expect(nrOfBooksAfterSecondSearch).toBeGreaterThan(nrOfBooksAfterFirstSearch)

    })


});