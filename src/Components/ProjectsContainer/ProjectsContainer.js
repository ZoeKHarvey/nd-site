import React, {useState} from 'react';
import PDFProject from '../PDFProject/PDFProject';
import WebProject from '../WebProject/WebProject';
import SampleProject from '../SampleProject/SampleProject';
import Brochure1 from '../../assets/ParentGuide_Final1.pdf'
import Brochure1Preview from '../../assets/Brochure1-preview.png';
import Brochure2 from '../../assets/PlayFootball_ResourceGuide.pdf';
import Brochure2Preview from '../../assets/ Brochure2-preview.png';





export const ProjectsContainer = () => {

  const [pdfProjects, setpdfProjects] = useState([{ src: Brochure1, preview: Brochure1Preview }, { src: Brochure2, preview: Brochure2Preview }]);

  const loopProjects = pdfProjects.map(function(project, index) {
    console.log('project??? ', project)
    return <PDFProject key={index} {...project} />
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