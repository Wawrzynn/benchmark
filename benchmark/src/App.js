import './App.css';
import React from 'react';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MeasurementPage from './pages/MeasurementPage';
import PlotPage from './pages/PlotPage';

function App() {
  return (
    <div className="App">
        <Title/>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/measurement' element={<MeasurementPage/>}/>
            <Route path='/plot' element={<PlotPage/>}/>
          </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
