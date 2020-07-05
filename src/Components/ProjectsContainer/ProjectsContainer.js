import React, {useState} from 'react';
import PDFProject from '../PDFProject/PDFProject';
import WebProject from '../WebProject/WebProject';
import SampleProject from '../SampleProject/SampleProject';
import Brochure1 from '../../assets/ParentGuide_Final1.pdf'
import Brochure1Preview from '../../assets/Brochure1-preview.png';
import Brochure2 from '../../assets/PlayFootball_ResourceGuide.pdf';
import Brochure2Preview from '../../assets/ Brochure2-preview.png';
import './ProjectsContainer.scss'





export const ProjectsContainer = () => {

  const [pdfProjects, setpdfProjects] = useState([{ src: Brochure1, preview: Brochure1Preview }, { src: Brochure2, preview: Brochure2Preview }]);

  const loopProjects = pdfProjects.map(function(project, index) {
    return <PDFProject key={index} {...project} />
  })
 

  return(
    <section className="ProjectsContainer" id="link-projects">
      <div className="div-pdf-all">
      <div className="div-pdfs">
       {loopProjects}
      </div>
       <p>Working with TK Interactive, a partner of the NFL, these edits for youth and parent resource guides were done for the “Play Football” program. Content includes safety tips for both parents and children, mental preparation advice, and input from professional athletes and coaches.</p>
       </div>      
      <WebProject />
      <SampleProject />
    </section>
  )
}

export default ProjectsContainer;