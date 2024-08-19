import logo from './logo.svg';
import './App.css';
import ButtonComponent from './assets/components/ButtonComponent';
import ImageComponent from './assets/components/ImageComponent';
import duck from './assets/img/duck.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <ButtonComponent btnText="prova" />
        <ImageComponent imgUrl={duck} />
      </header>
    </div>
  );
}

export default App;
