import React from "react";
import './App.css'
import { Login } from "./components/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Register } from "./components/Register";
import { Welcome } from "./components/Welcome";
function App() {
  //Exemplo de Requisição que deu certo
  async function fetchTest(data){
    const teste = await fetch('http://localhost:3001/', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resp = await teste.json()
    console.log(resp);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="register" element={<Register />} />
          <Route path="change-password" element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
