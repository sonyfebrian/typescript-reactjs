import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ListPlanet from './components/ListPlanet/ListPlanet';
import CreatePlanet from './components/DetailPlanet/CreatePlanet';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-planet" element={<ListPlanet />} />
        <Route path="/detail-planet" element={<CreatePlanet />} />
      </Routes>

    </>
  );
}

export default App;
