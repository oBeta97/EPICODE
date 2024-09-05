import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyMain from './components/MyMain';
import MyHeader from './components/MyHeader';
import NewsDetail from './components/NewsDetail';

function App() {
  return (
    <BrowserRouter>

      <header>
        <MyHeader />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<MyMain />} />
          <Route path='/news/:newsId' element={<NewsDetail />} />
        </Routes>
      </main>

      <footer>

      </footer>

    </BrowserRouter>
  );
}

export default App;
