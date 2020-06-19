import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Title from '../src/Components/Title/Title';
import ProjectsContainer from '../src/Components/ProjectsContainer/ProjectsContainer';
import About from '../src/Components/About/About';
import Contact from '../src/Components/Contact/Contact';

function App() {


  return(
    <div className="App">
      <Header />
      <Title />
      <ProjectsContainer />
      <About />
      <Contact />

    </div>
  )
}

export default App;
