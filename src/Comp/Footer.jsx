import React, { useEffect } from 'react'
import './Comp.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animations in ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <>
        <section className='back-b footer-border'>
          <div className="containerfluid">
            <div className="row py-4">
              <div data-aos="zoom-in-right" className="col-lg-8">
                <div className='footer-main'>
                  <ul className='d-flex align-items-center gap-2'>
                    <li><img className='footer-logo' src="https://mandalainfosys.com/wp-content/uploads/2024/06/logomandala.png" alt="" /></li>
                    <li> <h1 className='footer-heading'>Let’s Work</h1></li>
                  </ul>
                  <ul>
                 <li> <h1 className='footer-heading together'>Together</h1></li>
                  </ul>
                  

                   <div>
                    <nav>
                      <ul className='d-flex gap-3 flex-wrap'>
                        <li><button className='btn-footer d-flex gap-3'><h5>info@mandalainfosys </h5><h4 className='fw-bold'><i class="bi bi-arrow-up-right"></i></h4></button></li>
                        <li><button className='btn-footer d-flex gap-3'><h5>9869858656 </h5><h4 className='fw-bold'><i class="bi bi-arrow-up-right"></i></h4></button></li>

                      </ul>
                    </nav>
                   </div>
                </div>
              </div>

              <div data-aos="zoom-in-left" className="col-lg-4">
                <div>
                  <h2 className='text-light quick'>Quick Links</h2>

                   <nav className='d-flex gap-5 my-4'>
                   <ul className='footer-list'>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="">Services
                    </Link></li>
                    <li><Link to="">Latest News</Link></li>
                    <li><Link to="">Contact Us?</Link></li>
                    
                  </ul>

                  <ul className='footer-list'>
                    <li><Link to="">Web Development</Link></li>
                    <li><Link to="">Mobile App Development
                    </Link></li>
                    <li><Link to="">Marketing</Link></li>
                    <li><Link to="">Graphics Design?</Link></li>
                    
                  </ul>
                   </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='back-b footer-border'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 py-4">
                <h6  className='text-white-50'>Copyright @2024, Mandala Infosys All Rights Reserved</h6>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  )
}

export default Footer
