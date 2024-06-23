import React from 'react'
import './Comp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCertificate } from '@fortawesome/free-solid-svg-icons'

function Wrapper() {
  return (
    <>
      <section className='wrapper'>
        
        <div className="containerfluid">
            <div className="row">
                <div className="col-lg-12 d-flex flex-nowrap gap-4">
                   <div className='wrapperinside '>
                     <pre>Web Development <FontAwesomeIcon icon={faCertificate} fade /></pre>
                   </div>
                   <div className='wrapperinside '>
                     <pre>Design & Branding 
 <FontAwesomeIcon icon={faCertificate} fade /></pre>
                   </div>

                   <div className='wrapperinside '>
                     <pre>Mobile Application
 <FontAwesomeIcon icon={faCertificate} fade /></pre>
                   </div>

                   
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Wrapper
