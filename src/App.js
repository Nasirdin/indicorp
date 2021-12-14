import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import Choose from './components/choose/choose';
import Advice from './components/Advice/advice';
import Service from './components/service/service';
import Company from './components/company/company';
import Touch from './components/touch/touch';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home/>
        <Choose/>
        <Advice/>
        <Service/>
        <Company/>
        <Touch/>
        <Contact/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
