import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'
import Dashboard from './pages/Dashboard.js'
import Signup from './pages/Signup.js'
import Login from './pages/Login.js'
import { useState } from 'react';


function App() {

  const[isLogedIn , setLogedIn] = useState(false)
  return (
    <div>

      <Navbar isLogedIn={isLogedIn} setLogedIn={setLogedIn}> </Navbar>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login setLogedIn={setLogedIn}/>}/>
      <Route path='/signup' element={<Signup setLogedIn={setLogedIn}/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
