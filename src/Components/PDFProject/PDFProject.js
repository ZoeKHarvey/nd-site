import React, { useState } from 'react';
import './PDFProject.scss';
import PopUp from '../Popup/Popup'


function PDFProject(project) {

  const [seen, setSeen] = useState(false)

  return (
    <div className="PDFProject" >
      {seen && <div className="modal">
 
        <div className="modal_content">
          <span className="close" onClick={() => setSeen(false)}>
            &times;
          </span>
          <embed
            className="embed-brochure"
            src={project.src}
            type="application/pdf"
            width="90%"
            height="100%"
          />
        </div>
        </div>
      }
      <div onClick={() => setSeen(true)}>
        <img src={project.preview} alt="Preview of football brochure" onClick={() => setSeen(true)} />
      </div>
    </div>
  )
}

export default PDFProject;