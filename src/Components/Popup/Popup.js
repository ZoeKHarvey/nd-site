import React, {useState} from 'react';

function PopUp(project) {
  console.log(project)

  const [seen, setSeen] = useState(true)



    return (
      <div className="modal">
  
        <div className="modal_content">
          <span className="close" onClick={() => setSeen(false)}>
            &times;
          </span>
          <h1>here</h1>
          <embed 
              className="embed-brochure" 
              src={project.src} 
              type="application/pdf" 
              width="80%" 
              height="100%" 
     />
        </div>
      
      </div>
    );
  
}

export default PopUp;