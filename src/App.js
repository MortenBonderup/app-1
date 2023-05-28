import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Armbånd from './pages/Armbånd';
import Kort from './pages/Kort';
import Billet from './pages/Billet';
import Underholdning from './pages/Underholdning';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Armbånd/>}/>
        <Route path="/Kort" element={<Kort/>}/>
        <Route path="/Billet" element={<Billet/>}/>
        <Route path="/Underholdning" element={<Underholdning/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;