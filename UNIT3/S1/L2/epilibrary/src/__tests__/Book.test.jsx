import { render } from '@testing-library/react'
import BookList from '../components/BookList'

import fantasy from '../data/fantasy.json'

describe('Check if the BookList component works fine', () => {
    it('mounts correctly', () => {

        render(<BookList books={fantasy} />)

        
    })
})