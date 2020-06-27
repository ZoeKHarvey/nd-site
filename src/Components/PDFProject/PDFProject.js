import React, {useState} from 'react';

import './PDFProject.scss'


function PDFProject(project) {
  console.log('--->', project)
  const [pdfOn, setView] = useState(false);



  return(
    <div className="PDFProject">
      <img src={project.preview} alt="Preview of football brochure" onClick={() => setView(true)} />

     {pdfOn &&
     <div className="div-embed-brochure"onClick={() => setView(false)}>
     <embed 
       className="embed-brochure" 
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