import React from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Categories from './components/Categories'
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
       <Navbar/>
      <Home/>
      <About/>
      <Categories/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
