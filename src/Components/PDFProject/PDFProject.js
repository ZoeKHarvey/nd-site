import React, {useState} from 'react';
import Brochure1 from '../../assets/ParentGuide_Final1.pdf'
import Brochure1Preview from '../../assets/Brochure1-preview.png';
import './PDFProject.scss'


function PDFProject(project) {
  console.log('--->', project)
  const [pdfOn, setView] = useState(false);



  return(
    <div className="PDFProject">
      <h1>PDF PROJECT</h1>
      <img src={project.preview} alt="Preview of football brochure" onClick={() => setView(true)} />

     {pdfOn &&
     <div onClick={() => setView(false)}>
     <embed 
       className="brochure1-pdf" 
       src={project.src} 
       type="application/pdf" 
       width="50%" 
       height="500px" 
       
     />
     </div>
     }
    </div>
  )
}

export default PDFProject;