import React from 'react'
import Header from './Components/Header'
import './App.css'
import Hero from './Components/Hero';
import Services from './Components/Services';
import Places from './Components/Places';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Recommended from './Components/Recommended';
function App() {
  return(
  <>
  <Header />
  <Hero />
  <Services />
  <Places />
  <Recommended/>
  <Testimonials/>
  <Footer/>
  <ScrollToTop/>
  </>
    
  )
 
}

export default App;
