import React from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Categories from './components/Categories'
function App() {
  return (
    <>
       <Navbar/>
      <Home/>
      <About/>
      <Categories/>
    </>
  );
}

export default App;
