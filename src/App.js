import logo from './logo.svg';
import './App.css';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import ListaUsuarios from './ListaUsuarios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN CRUD CON REACT</h1>
        <BrowserRouter>
        <Routes>
           <Route path = '/' element={<ListaUsuarios/>} exact> </Route>
           <Route path = '/agregarusuario' element={<AgregarUsuario/>} exact> </Route>
           <Route path = '/editarusuario' element={<EditarUsuario/>} exact> </Route>
        </Routes>
        </BrowserRouter>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          M <code>Mongodb</code> E <code>Express.js</code> R <code>React</code> N <code>Node.js</code>.
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
