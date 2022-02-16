import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ListPlanet from './components/ListPlanet/ListPlanet'
import Nav from './components/Nav/Nav';

function App() {
  return (
    <>
     <Nav />
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/list-planet' element={<ListPlanet/>} />
    </Routes>
   
       
    </>
  );
}

export default App;
