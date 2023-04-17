import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {Body} from './Body/Body'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Body/>
     <Footer/>
    </div>
  );
}

export default App;
