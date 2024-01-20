import './App.css';
import Rootlayout from './layout/Rootlayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Blog from './pages/Blog'
function App() {
  return (
    <div>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Rootlayout/>}>
            <Route index  element={<Home/>} />
            <Route  path='homepage' element={<Homepage/>} />
            <Route  path='service' element={<Service/>} />
            <Route  path='blog' element={<Blog/>} />
            <Route  path='contact' element={<Contact/>} />
          </Route>
       </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
