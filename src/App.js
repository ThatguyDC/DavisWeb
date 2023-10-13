
import './App.css';

import NavBar from './Components/NavBar';

import Paragraph from './Components/Paragraph';

import AllProjects from './Components/AllProjects';

import ContactForm from './Components/Contact';

import React, { useState, useEffect } from 'react';



  const App = () => {
    
    const [work, setProject] = useState([]); //work is passed through
    
 
    async function loadProject() {
      const response = await fetch('https://etbd.tech/private/readcsv.php?file=cowperdr_137749/projectData.csv'); //set this url to the php csv converter on the etbd.tech server
       const data = await response.json();
      setProject(data);
      console.log(data);
      
      
    }
  
    useEffect(() => {
      
      loadProject();

    },[]);
  
  
  
    return (
      <div className = "container">

  <NavBar />
  <Paragraph />
  <AllProjects work = {work}/>
  <ContactForm />

      </div>
    );
  }
  
  export default App;

