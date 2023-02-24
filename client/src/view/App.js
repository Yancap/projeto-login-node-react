import React from "react";
import './App.css'
import { Login } from "./components/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Register } from "./components/Register";
import { Welcome } from "./components/Welcome";
import { GlobalStorage } from "./Context/GlobalContext";
function App() {

  return (
    <GlobalStorage>
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
    </GlobalStorage>
  );
}

export default App;
