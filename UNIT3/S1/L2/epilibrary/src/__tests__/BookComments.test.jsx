import { render, screen } from "@testing-library/react";
import BookComments from "../components/BookComments";
import fantasy from '../data/fantasy.json'

describe('Check if the BookComments component works fine', () => {
    it('BookComments mount correctly',() => {

        render(<BookComments bookId={fantasy[0]}/>);

        const commentCard = screen.getByTestId('comment-card');

        expect(commentCard).toBeInTheDocument();
    });
    
    it('check if the fetch work fine', async () => {
        
        render(<BookComments bookId={fantasy[0]}/>)

        const commentList = await screen.findByTestId('comment-list')

        expect(commentList).toBeInTheDocument();

    });


});