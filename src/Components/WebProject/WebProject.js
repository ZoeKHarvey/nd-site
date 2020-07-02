import React, {useState} from 'react';
import './WebProject.scss';
import Spinner from 'react-spinkit'


function WebProject() {

  const [isLoading, setLoading] = useState(true)
console.log('----->', isLoading)

  return(
    <div className="WebProject">
      
      
      {isLoading ? (
          <Spinner
            className="loading text-center"
            name="three-bounce"
            color="black"
            fadeIn="none"
          />
  
        ) : null}
      <iframe onLoad={() => setLoading(false)} src="http://kinisisventures.com/cyprus-realized/" title="SOME SHIT" height="400px" width="80%"></iframe>
      <p>An expansive project for an international investment event, work for the “Cyprus Realized” concept includes an official website edot, affiliated company biographies, and investor invitations.</p>

      <iframe src="https://tkinteractive.com/brandsrv/" title="SOME SHIT" height="400px" width="80%"></iframe>
      <p>A website copy edit for BrandSrv, an online resource center for brand management and marketing. </p>

      <iframe src="  https://coprime.co/cmc/" title="SOME SHIT" height="400px" width="80%"></iframe>

    </div>
  )
}

export default WebProject;