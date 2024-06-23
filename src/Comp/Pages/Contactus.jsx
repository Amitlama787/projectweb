import React from 'react'
import './Pages.css'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {faGripLinesVertical} from '@fortawesome/free-solid-svg-icons'
function Contactus() {
   const handleSendEmail=(e)=> {
    e.preventDefault()
    emailjs.sendForm('service_amit','template_p60nwrg', e.target,'5NIlM_vHykiO7Eu70')
   .then(res=>{
    console.log (res)
   })
   .catch(err=> {
    console.log(err)
   })
  } 
  return (
    <>

     <section className='back-b'>
     <div className="containerfluid  mx-2">
          <div className="row">
            <div  className="col-lg-6 py-5 ">
              <div className='py-3'>
                <ul className='d-flex gap-3 align-items-center'>
                  <li className='fs-2'> <FontAwesomeIcon icon={faArrowRight} size='' style={{ color: "#0dd311", }} /></li>
                  <li className='fs-5 color-green'>Contact Us</li>
                </ul>
                <h1 className='top-web ps-3'>Get in touch for any kind of help and informations
                </h1>
               
              </div>

              <div>
              <nav className='py-3'>
                <ul className='contact-row-2'>
                  <li className='contact-circle'><p className='p'><i class="bi bi-geo-alt-fill"></i></p></li>
                  <li><h3 className='text-light py-2'>Our head office address:</h3></li>
                  <li><p className='text-white-50'>Mid-Baneshwor, Kathmandu (Opposite to Global College)</p></li>
                </ul>
              </nav>
              </div>

              <div>
              <nav className='py-3'>
                <ul className='contact-row-2'>
                  <li className='contact-circle'><p className='p'><i class="bi bi-telephone-fill"></i></p></li>
                  <li><h3 className='text-light py-2'>Call for help:</h3></li>
                  <li><p className='text-white-50'>9820555992</p></li>
                </ul>
              </nav>
              </div>


              <div>
              <nav className='py-3 '>
                <ul className='contact-row-2'>
                  <li className='contact-circle'><p className='p'><i class="bi bi-envelope"></i></p></li>
                  <li><h3 className='text-light py-2'>Mail us for information</h3></li>
                  <li><p className='text-white-50'>info@mandalainfosys.com</p></li>
                </ul>
              </nav>
              </div>


              
            </div>

            <div className="col-lg-6 contact-right">
              <div className='contact-form text-center'>
               <div className='py-5'>
                 <h3 className='text-light'>Drop Us a Message</h3>
               </div>
               
                  <form onSubmit={handleSendEmail} action="">
                     <div className='padding-input'>
                     <label className='d-none'>Enter your name</label>
                     <input className='input-box' type="text" name='name' placeholder='First name' />
                     </div>

                     <div className='py-5'>
                     <label className='d-none'>Enter your Email</label>
                     <input className='input-box' type="email" name='email' placeholder='Enter email' />
                     </div>
                       

                     <div>
                     <label className='d-none'>Enter your Number</label>
                     <input className='input-box' type="text" name='number' placeholder='Enter number' />
                     </div>

                     
                     

                    <div>
                      <div className='py-5'>
                        <label className='d-none' htmlFor="browser">Choose your browser from the list:</label>
                        <input className='input-box2' list="browsers" name="browser" id="browser" placeholder='Select your package' />
                        <datalist id="browsers">
                          <option value="">
                          </option><option value="Regular Package">
                          </option><option value="Silver Package">
                          </option><option value="Golden Package">

                          </option></datalist>
                      </div>

                      <div className='py-5'>
                        <label className='d-none'>Write your Message</label>
                        <textarea className='input-box' type="message" name='message' placeholder='your message' />
                      </div>
                    </div>

                     <div className='py-3'>
                      <input className='submit' type="submit" name="" id="" value='Send Message Us'/>
                     </div>
                  </form>
                </div>
              </div>
            </div>

            
          </div>
       
     </section>
   


    {/* map */}

    <section>
      <div className="containerfluiid">
        <div className="row">
          <div className="col-lg-12">
          <div className="App" style={{ backgroundColor: 'gray', }}>
      <iframe
        className="w-100"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.630099059515!2d85.28404259845686!3d27.72014136390561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18ece8135209%3A0xa82eb67cf4731fa8!2sSwayambhu%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1718966181540!5m2!1sen!2snp"
        height={450}
        style={{ border: '2px solid gray', width: '100%' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Contactus
