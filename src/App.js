import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Perfil_mscs from './pages/Perfil_mscs'
import Perfil_desenhistas from './pages/Perfil_desenhistas'
import Cadastro from './pages/Cadastro';
import Bio from './pages/Bio';
import Eventos from './pages/Eventos';
import ContCad from './pages/ContCadastro';

function App() {
  return (

    <dev>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Homepage/>}/> 
         <Route path="/login" element ={<Login/>}/>
         <Route path ="/Perfil_mscs" element={<Perfil_mscs/>}/>
         
          <Route path ="/Cadastro" element={<Cadastro/>}/>
          <Route path ="/Perfil_desenhistas" element={<Perfil_desenhistas/>}/>
          <Route path ="/Bio" element={<Bio/>}/>
          <Route path="/Eventos" element= {<Eventos/>}/>    
          <Route path ="/ContCadastro" element={<ContCad/>}/>
        </Routes>
      </BrowserRouter>
    </dev>

  );
}

export default App;
