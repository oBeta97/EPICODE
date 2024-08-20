import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import MyNav from './components/MyNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav />
      </header>
    </div>
  );
}

export default App;
