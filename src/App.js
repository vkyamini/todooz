import React from "react";
import NavTabs from "./components/NavTabs";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';


function App() {
  return (
    // neeed to specify browser routes or else throws error
    <BrowserRouter> 
  
    <h1>welcome to TooDooz App</h1>
    <NavTabs/>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/AboutMe" element={<AboutMe/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Projects" element={<Projects/>}/>
   
    </Routes>
  
   </BrowserRouter>
  
  );
}

export default App;
