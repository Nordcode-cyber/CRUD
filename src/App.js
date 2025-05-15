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
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CRUD MERN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="agregarusuario">AgregarUsuario</a>
        </li>
        <li class="nav-item dropdown">
          
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            
          </ul>
        </li>
        <li class="nav-item">
        
        </li>
      </ul>
    </div>
  </div>
</nav> 
       
        
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
