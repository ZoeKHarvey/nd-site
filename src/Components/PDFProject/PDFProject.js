import React, {useState} from 'react';
import './PDFProject.scss';
import PopUp from '../Popup/Popup'





function PDFProject(project, props) {

  const [pdfOn, setView] = useState(false);
  const [seen, setSeen] = useState(false)




  return(
   
    <div className="PDFProject">
      {seen ? <PopUp /> : null}
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

{/* <div className="btn" onClick={() => setSeen(true)}>
      <button>New User?</button>
    </div>

    {seen &&
 <div className="modal">
     <div className="modal_content">
   <span className="close" onClick={() => setSeen(false)}>&times;    </span>
 <p>I'm A Pop Up!!!</p>
</div>
</div>
} */}

<div>
        <div className="btn" onClick={() => setSeen(true)}>
          <button>New User?</button>
        </div>
        
      </div>




    </div>
  )
}

export default PDFProject;