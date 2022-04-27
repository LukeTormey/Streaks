import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './webpage/Dashboard';
import Login from './webpage/Login';
import Register from './webpage/Register';

function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
