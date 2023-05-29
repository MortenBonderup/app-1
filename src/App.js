import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Armbaand from './pages/Armbaand';
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
        <Route path="/" element={<Armbaand/>}/>
        <Route path="/Kort" element={<Kort/>}/>
        <Route path="/Billet" element={<Billet/>}/>
        <Route path="/Underholdning" element={<Underholdning/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;