import React from 'react';
import Home from './Main/Home';
import { Routes, Route } from "react-router-dom"
import {Details} from './Main/Details'; 
import {Header} from './components/header/Header';
import Cart from './components/cart/Cart';


 function App(){
  return (
<div className="wrapper">
  <Header/>
  <Routes>
  <Route  path="*" element={<Home/>}></Route>
  <Route path='/Details/:bookId' element={<Details/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>

  </Routes>
</div>

  );
};

export default App;







