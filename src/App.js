import React from 'react';
import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Splash from './pages/Splash';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Splash />}/>
          <Route path='/home' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
