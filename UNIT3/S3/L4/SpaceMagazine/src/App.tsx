import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyMain from './components/MyMain';
import MyHeader from './components/MyHeader';

function App() {
  return (
    <BrowserRouter>

      <header>
        <MyHeader />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<MyMain />} />
          <Route path='/news/:newsId' element />
        </Routes>
      </main>

      <footer>

      </footer>

    </BrowserRouter>
  );
}

export default App;
