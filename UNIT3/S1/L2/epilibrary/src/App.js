import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Col, Row } from "react-bootstrap";

import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
import CategorySelector from './components/CategorySelector';
import SearchBook from './components/SearchBook';

import fantasy from './data/fantasy.json';
import history from './data/history.json';
import horror from './data/horror.json';
import romance from './data/romance.json';
import scifi from './data/scifi.json';

function App() {

  const [defaultCategorySelected, setDefaultCategorySelected] = useState(fantasy);
  const [categorySelected, setCategorySelected] = useState(fantasy);
  const [searchInputVal, setSearchInputVal] = useState('');

  const categories = {
    'fantasy': fantasy,
    'history': history,
    'horror': horror,
    'romance': romance,
    'scifi': scifi,
  }

  return (
    <>
      <header>
        <MyNav />
      </header>

      <main className='d-flex flex-column align-items-center'>
        <Welcome />

        <Row>
          <Col>
            <CategorySelector onCategorySelect={(category) => {
              setCategorySelected(categories[category]);
              setDefaultCategorySelected(categories[category]);
            }} />
          </Col>
          <Col>
            <SearchBook
              onInputChange={
                (inputVal) => {
                  setCategorySelected(() => {
                    if (inputVal === '')
                      return defaultCategorySelected;

                    let category = [];

                    if(searchInputVal.length > inputVal.length){
                      setSearchInputVal(inputVal);
                      category = defaultCategorySelected
                    }
                    else{
                      setSearchInputVal(inputVal);
                      category = categorySelected;
                    }

                    return category.filter(
                      (item) => item.title.toLowerCase().includes(inputVal.toLowerCase())
                    );
                  }
                  )
                }
              } />
          </Col>
        </Row>

        <BookList books={categorySelected} />
      </main>

      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
