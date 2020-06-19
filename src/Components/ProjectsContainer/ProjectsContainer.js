import React from 'react';
import PDFProject from '../PDFProject/PDFProject';
import WebProject from '../WebProject/WebProject';
import SampleProject from '../SampleProject/SampleProject';

function ProjectsContainer() {


  return(
    <div className="ProjectsContainer">
      <h1>PROJECTS CONTAINER</h1>
      <PDFProject />
      <WebProject />
      <SampleProject />
    </div>
  )
}

export default ProjectsContainer;