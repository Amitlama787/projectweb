import React, { useEffect } from 'react'
import './Pages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import Wrapper from '../Wrapper'
import Slider from '../Slider'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import AutoIncreasingNumber5 from './AutoIncreasingNumber5';
import Slider2 from '../Slider2'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Aboutus() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animations in ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <section className='body-b py-5 '>
        <div className="containerdfluid py-5">
          <div className="row">
            <div className="col-lg-12">
              <div data-aos="zoom-in" className='element'>

                <p className='elemet-heading-title'>
                  Your Bridge <br />
                  to  <br />
                  the Digital <br />
                  Future <br />
                </p>

                <div className='element-heading-img'>
                  <img width='100' src="https://mandalainfosys.com/wp-content/uploads/2024/03/inside-title1.png" alt="" />
                </div>

                <div className='element-heading-img2'>
                  <img width='100' src="https://mandalainfosys.com/wp-content/uploads/2024/03/inside-title2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second row */}

      <section className='body-b'>
        <div className="containerfluid">
          <div className="row">
            <div className="col-lg-12">
              <div className='elemnt-second-row'>
                <div className='text-center'>
                  <img className='w-100' src="https://mandalainfosys.com/wp-content/uploads/2024/03/video-two-bg.jpg" alt="" />
                </div>

                <div className='sencond-row-video-link'>
                  <p className='playbtn'><i class="bi bi-play-fill"></i>   </p>
                  <div  >
                    {/* Button trigger modal */}
                    <button type="button" className="modalbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">

                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                          </div>
                          <div className="modal-body">
                            ...
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* error */}



      {/* !!!!!!!!!!!!!!!!!!!!!!!!! */}


      <section className='error-section'>
        {/* 3rd row */}

        <section className='body-b'>
          <div className="containerfluid w-100">
            <div className="row  py-5">
              <div data-aos="fade-up-right" className="col-lg-6 my-5">
                <div>
                  <p className='element-row-text'>At Mandala InfoSys, we’re not just a team of IT professionals; we’re innovators, problem solvers, and visionaries dedicated to transforming businesses through technology. With a foundation built on passion, expertise, and a relentless commitment to excellence, we strive to redefine the possibilities of what technology can achieve.</p>
                </div>

              </div>

              <div data-aos="fade-up-left" className="col-lg-3 offset-2">
                <div className='element-2025'>
                  2025
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4th row */}

        <section className='body-b'>
          <div className="containerfluid mx-3">
            <div className="row">
              <div data-aos="fade-up" className="col-lg-12">
                <div className='text-center'>
                  <li className='fs-2 d-flex  justify-content-center gap-2 text-light'> <FontAwesomeIcon icon={faArrowRight} size='' style={{ color: "#0dd311", }} /> <p className='fs-5'>
                    Who We Are</p> </li>
                  <li>  <h1 className='top-web ps-3'>
                    We deals with many services to <br />take extra care of your problem  <br />solutions.
                  </h1></li>

                </div>
              </div>
            </div>

            <div className="row my-5">
              <div className="col-lg-4">
                <div>
                  <div data-aos="zoom-in" className="big-box">
                    <div className='d-flex gap-3 align-items-center big-box-border'>
                      <p className='hand-icon'><FontAwesomeIcon icon={faHandshake} /></p>
                      <h5 className='text-light'>Step 1: Requirement  Analysis</h5>
                    </div>
                    <div className='text-dark-emphasis py-4 lh-lg'>
                      We engage stakeholders to comprehend their needs, objectives, and constraints, followed by creating a comprehensive document outlining both functional and non-functional requirements.
                    </div>
                  </div>

                </div>
              </div>

              <div data-aos="zoom-in" className="col-lg-4">
                <div>
                  <div className="big-box">
                    <div className='d-flex gap-3 align-items-center big-box-border'>
                      <p className='hand-icon'><FontAwesomeIcon icon={faCodeBranch} /></p>
                      <h5 className='text-light'>Step 1: Requirement Analysis</h5>
                    </div>
                    <div className='text-dark-emphasis py-4 lh-lg'>
                      We design the system architecture and define the necessary technology stack, while also creating wireframes or prototypes to visualize key functionalities and the user interface.
                    </div>
                  </div>

                </div>
              </div>


              <div data-aos="zoom-in" className="col-lg-4">
                <div>
                  <div className="big-box">
                    <div className='d-flex gap-3 align-items-center big-box-border'>
                      <p className='hand-icon'><i class="bi bi-bar-chart-line-fill"></i></p>
                      <h5 className='text-light'>
                        Step 3: Development</h5>
                    </div>
                    <div className='text-dark-emphasis py-4 lh-lg'>
                      We craft code aligned with the defined architecture and specifications, while employing version control systems to oversee code changes and foster seamless team collaboration.                </div>
                  </div>

                </div>
              </div>
            </div>


            <div className="row my-5">
              <div data-aos="zoom-in" className="col-lg-4">
                <div>
                  <div className="big-box">
                    <div className='d-flex gap-3 align-items-center big-box-border'>
                      <p className='hand-icon'><i class="bi bi-person-fill-gear"></i></p>
                      <h5 className='text-light'>Step 4: Testing</h5>
                    </div>
                    <div className='text-dark-emphasis py-4 lh-lg'>
                      We conduct a suite of tests (unit, integration, system, acceptance) to verify the solution's performance, followed by identifying and resolving any bugs or issues surfaced during testing.
                    </div>
                  </div>

                </div>
              </div>

              <div data-aos="zoom-in" className="col-lg-4">
                <div>
                  <div className="big-box">
                    <div className='d-flex gap-3 align-items-center big-box-border'>
                      <p className='hand-icon'><i class="bi bi-lightbulb"></i></p>
                      <h5 className='text-light'>
                        Step 5: Deployment</h5>
                    </div>
                    <div className='text-dark-emphasis py-4 lh-lg'>
                      We strategically plan the deployment, encompassing environment setup, data migration, and user training, followed by a seamless implementation in the production environment to ensure minimal disruption during the rollout and go-live phase.
                    </div>
                  </div>

                </div>
              </div>


              <div data-aos="zoom-in" className="col-lg-4">
                <div>
                  <div className="big-box">
                    <div className='d-flex gap-3 align-items-center big-box-border'>
                      <p className='hand-icon'><FontAwesomeIcon icon={faGears} /></p>
                      <h5 className='text-light'>

                        Step 6: Maintenance and Support</h5>
                    </div>
                    <div className='text-dark-emphasis py-4 lh-lg'>
                      We offer continuous post-deployment support to promptly address user concerns or issues post-launch, alongside implementing updates, patches, and enhancements driven by feedback and evolving needs.               </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* wrapper 5th row */}

          <Wrapper />



          {/* slider 6th row */}

          <div className="container py-5 my-5">
            <div className="row">
              <div data-aos="fade-in" className="col-lg-12">
                <div>

                  <ul className='d-flex team  justify-content-center gap-3'>
                    <li> <FontAwesomeIcon icon={faArrowRight} size='' style={{ color: "#0dd311", }} /></li>
                    <li>Team Members</li>
                  </ul>

                  <div>
                    <div className="team-heading">Meet Our Professionals Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="containerfluid">
            <div className="row">
              <div data-aos="fade-in" className="col-lg-12">
                <Slider />
              </div>
            </div>
          </div>


          {/* 7th row */}

          <div className="container my-5 py-5 ">
            <div className="row">
              <div data-aos="fade-up" className="col-lg-12 d-flex column ">
                <div className='ninerow'>
                  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>
                  <div className='font'>
                    <span className='one'>
                      <AutoIncreasingNumber5 start={1} interval={100} end={5} />
                    </span>

                  </div>
                  <h5 className='text-light fw-bold'>Years Of Experience</h5>

                </div>

                <div className='ninerow'>
                  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>
                  <h1 className='one'><AutoIncreasingNumber5 start={1} interval={100} end={30} /></h1>
                  <h5 className='text-light fw-bold'>Project’s Complete</h5>
                </div>

                 <div className='d-lg-block d-none'>
                   <div className='d-flex gap-5'>
                   <div className='ninerow'>
                  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>
                  <h1 className='one'> <AutoIncreasingNumber5 start={1} interval={1000} end={15} /></h1>
                  <h5 className='text-light fw-bold'>Professionals <br /> Team Member</h5>

                </div>

                <div className='ninerow '>
                  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>
                  <h1 className='one'><AutoIncreasingNumber5 start={1} interval={3} end={500} /></h1>
                  <h5 className='text-light fw-bold '>Cup Of Coffee</h5>
                </div>
                  
                   </div>
                 </div>

                  </div>
                 <div className='column2 d-block d-lg-none d-flex justify-content-around me-2'>
                 <div className='ninerow'>
                  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>
                  <h1 className='one'> <AutoIncreasingNumber5 start={1} interval={1000} end={15} /></h1>
                  <h5 className='text-light fw-bold'>Professionals <br /> Team Member</h5>

                </div>

                <div className='ninerow '>
                  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>
                  <h1 className='one'><AutoIncreasingNumber5 start={1} interval={3} end={500} /></h1>
                  <h5 className='text-light fw-bold '>Cup Of Coffee</h5>
                </div>
                 </div>
              
            </div>
          </div>


          {/* 8th row  */}


          <div className="containerfluid my-5 py-5 mx-2">
            <div className="row">
              <div data-aos="fade-right" className="col-lg-6">
                <div>
                  <ul className='d-flex gap-3 align-items-center'>
                    <li className='fs-2'> <FontAwesomeIcon icon={faArrowRight} size='' style={{ color: "#0dd311", }} /></li>
                    <li className='fs-5 color-green'>Testimonials</li>
                  </ul>
                  <h1 className='top-web ps-3'>
                    It’s always a joy to hear that the work we do, has positively reviews</h1>

                </div>
              </div>

              <div data-aos="fade-left" className="col-lg-5 offset-1 py-5 my-4 row8-min">
                <div>
                  <h5 className='text-dark-emphasis'>We have spent 5 years working for most recognized and successful retailers so we have many good review of works.</h5>
                </div>
              </div>
            </div>
          </div>

          {/* 9th row */}

          <div className="containerfluid py-5 ">
            <div className="row">
              <div data-aos="fade-right" className="col-lg-5">
                <div>
                  <img className='w-100' src="https://mandalainfosys.com/wp-content/uploads/2024/03/Untitled-design-11.png" alt="" />
                </div>
              </div>

              <div data-aos="fade-left" className="col-lg-6 offset-1  py-5">
                <Slider2 />
              </div>
            </div>
          </div>

          {/* 10 th row */}
          <div className="containerlfluid py-5  minus-margin">
            <div className="row">
              <div data-aos="fade-up" className="col-lg-12">

                <div>
                  <h3 className='text-light text-center'>We Have 30+Global Clients</h3>
                </div>

                <div className='d-flex gap-4 py-5 my-5'>
                  <div className='logo-wi'><img className='about-logo-wrap' src="https://mandalainfosys.com/wp-content/uploads/2024/03/Untitled-design-9.png" alt="" /></div>

                  <div className='logo-wi'><img className='about-logo-wrap' src="https://mandalainfosys.com/wp-content/uploads/2024/03/icon-removebg-preview.png" alt="" /></div>

                  <div className='logo-wi'><img className='about-logo-wrap' src="https://mandalainfosys.com/wp-content/uploads/2024/03/therapy-1.png" alt="" /></div>

                  <div className='logo-wi'><img className='about-logo-wrap' src="https://mandalainfosys.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-22-at-13.29.34_c37195c0.jpg" alt="" /></div>

                  <div className='logo-wi'><img className='about-logo-wrap' src="https://mandalainfosys.com/wp-content/uploads/2024/03/MIND-THERAPY-01.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Aboutus
