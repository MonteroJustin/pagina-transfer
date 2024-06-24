import logo from './logo.svg';
import './App.css';
import {
  useFirebaseApp
} from 'reactfire';

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pagina para ventas tranfer
        </p>
        <a
          className="App-link"
          href="https://es.wikipedia.org/wiki/Agaricus#/media/Archivo:Agaricus_campestris.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Justin Careverga
        </a>
      </header>
    </div>
  );
}

export default App;
