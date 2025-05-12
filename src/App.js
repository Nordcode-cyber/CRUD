import logo from './logo.svg';
import './App.css';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import ListaUsuarios from './ListaUsuarios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN CRUD CON REACT</h1>
        <ListaUsuarios/>
        <AgregarUsuario/>
        <EditarUsuario/>

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
      </header>
    </div>
  );
}

export default App;
