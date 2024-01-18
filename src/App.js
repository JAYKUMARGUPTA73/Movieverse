import React from "react";
import Navcomp from "./components/Navbar";
import Footercomp from "./components/Footer";
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  


function App() {
  return (
    <>
      <Navcomp /> 
      <Footercomp/>    
    </>
  );
}

export default App;
