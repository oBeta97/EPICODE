import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>

      <main>
        <Welcome />
      </main>

      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
