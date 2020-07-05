import React from 'react';
import './Title.scss'
import NikoPic from '../../assets/niko-sample.jpg'

function Title() {



    return(
      <section className="section--welcome-page Title">
        <img src={NikoPic} />
        <div>
          <p>Niko Demetriou.</p>
          <p>Writer <span>&#8226;</span> Editor</p>
          {/* button will link to contact */}
          <p className="welcome-inqire">Inquire</p>
        </div>
      </section>
    )
  
}

export default Title;