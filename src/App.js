import React from 'react';
import logo from './logo.svg';
import Login from './Pages/Login';
import { Counter } from './features/counter/Counter';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import './Assets/style.css'
import Form from './Pages/form';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/form" element={<Form />} />
          {/* <Route path="/dash" element={<div> <Dash /></div>} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
