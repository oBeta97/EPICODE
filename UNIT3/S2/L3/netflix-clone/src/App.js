import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.js'

import MyNav from './components/MyNav';
import MyMain from './components/MyMain.jsx';
import MyFooter from './components/MyFooter.jsx';
import SettingsPage from './components/SettingsPage.jsx';
import NotFound from './components/NotFound.jsx';

import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import TvShow from './components/TvShow.jsx';
import MovieDetails from './components/MovieDetails.jsx';


function App() {

  return (
    <BrowserRouter>
      <div className='bg-black text-light p-0 m-0 w-100 d-flex flex-column'>
        
        <header>
          <MyNav />
        </header>

        <main className='flex-grow-1'>

          <Routes>
            <Route path="/" element={<MyMain />} />
            <Route path="/tvshow" element={<TvShow />} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path="/moviedetails/:movieId" element={<MovieDetails />} />
            
            
            <Route path='*' element={<NotFound />} />
          </Routes>

        </main>

        <footer className='bg-black text-secondary'>
          <MyFooter />
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
