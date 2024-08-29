import { render, screen } from '@testing-library/react';
import BookList from '../components/BookList'

import fantasy from '../data/fantasy.json'


describe('Check if the BookList component works fine', () => {
    it('mounts correctly', () => {

        render(<BookList books={fantasy} />)

        const bookList = screen.getByTestId('booklist-container')

        expect(bookList).toBeInTheDocument();

    });

    it('show the exact number of cards', () => {
        
        render(<BookList books={fantasy} />)

        const bookListCol = screen.getAllByTestId('booklist-col');

        expect(bookListCol.length).toEqual(fantasy.length);

    });

});