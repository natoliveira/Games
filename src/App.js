import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import './components/Menu/Menu.css';
import Games from './components/Games/Games';
import'./components/Games/Games.css';
import Formulario from './components/Formulario/Formulario';
import './components/Formulario/Formulario.css';
import Rodape from'./components/Rodape/Rodape';
import './components/Rodape/Rodape.css';

function App() {
  return (
    <div className="App">
     <Menu></Menu>
     <br></br>
     <p id="p1">Opções de games disponíveis para eventos on-line</p>
     <Games></Games>
     <Formulario></Formulario>
     <br></br>
     <Rodape></Rodape>
    </div>
    
  );
}

export default App;
