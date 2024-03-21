import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'
import Dashboard from './pages/Dashboard.js'
import Signup from './pages/Signup.js'
import Login from './pages/Login.js'
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute.js';


function App() {

  const[isLogedIn , setLogedIn] = useState(false)
  return (
    <div className='w-screen h-screen bg-[#060D13] flex flex-col'>

      <Navbar isLogedIn={isLogedIn} setLogedIn={setLogedIn}> </Navbar>
    
    <Routes>
      <Route path='/' element={<Home isLogedIn={isLogedIn}/>}/>
      <Route path='/login' element={<Login setLogedIn={setLogedIn}/>}/>
      <Route path='/signup' element={<Signup setLogedIn={setLogedIn}/>}/>
      <Route path='/dashboard' element={
      <PrivateRoute isLogedIn={isLogedIn}>
      <Dashboard/>
      </PrivateRoute>}/>
    </Routes>
    </div>
  );
}

export default App;
