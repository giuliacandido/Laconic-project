import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AnimatedRoutes />
      </BrowserRouter>
     
    </div>
  )
}

export default App
