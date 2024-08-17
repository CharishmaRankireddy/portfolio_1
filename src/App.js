import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Home from './pages/Home';
import Header from './pages/heder';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Internships from './pages/Internships';
import Contact  from './pages/Contact';
import './App.css';

const App = () => {
  return (
   <div>
<Header/>
<About/>
<Skills/>
<Projects/>
<Internships/>
<Contact/>

   </div>
  );
};

export default App;
