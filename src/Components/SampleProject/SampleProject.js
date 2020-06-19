import React, {useState} from 'react';
import sampleScreenWrite from '../../assets/sample-sw.pdf';
import samplePreview from '../../assets/sample-preview.png';


function SampleProject() {
  const [previewOn, setPreview] = useState(false);

  return(
    <div className="SampleProject">
      <h1>SAMPLE PROJECT</h1>

      <iframe src="https://www.baeblemusic.com/musicblog/6-16-2015/donnie-trumpet-and-the-social-experiment-surf.html" title="SOME SHIT" height="400px" width="80%"></iframe>
      <img src={samplePreview} onClick={() => setPreview(true)} />
      {previewOn &&
        <div onClick={() => setPreview(false)}>
          <embed 
            src={sampleScreenWrite} 
          type="application/pdf" 
          width="50%" 
          height="500px" />
        </div>}

  
    </div>
  )
}

export default SampleProject;