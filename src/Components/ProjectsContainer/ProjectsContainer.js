import React, {useState} from 'react';
import PDFProject from '../PDFProject/PDFProject';
import WebProject from '../WebProject/WebProject';
import SampleProject from '../SampleProject/SampleProject';
import Brochure1 from '../../assets/ParentGuide_Final1.pdf'
import Brochure1Preview from '../../assets/Brochure1-preview.png';




export const ProjectsContainer = () => {

  const [pdfProjects, setpdfProjects] = useState([{ src: Brochure1, preview: Brochure1Preview }]);

  const loopProjects = pdfProjects.map((project) => {
    console.log('project??? ', project)
    return <PDFProject {...project} />
  })
 

  return(
    <div className="ProjectsContainer">
      <h1>PROJECTS CONTAINER</h1>
      {loopProjects}
      <WebProject />
      <SampleProject />
    </div>
  )
}

export default ProjectsContainer;