 import React from 'react';
import './Pages.css'
import Wrapper from '../Wrapper'
import Slider2 from '../Slider2'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function Services() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // duration of animations in ms
          once: true, // whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <>

<section  className='body-b py-5 '>
        <div className="containerdfluid py-5">
            <div className="row">
                <div className="col-lg-12">
                 <div data-aos="zoom-in" className='element'>

                    <p className='elemet-heading-title lh-5'>
                    Digital Services <br />
                    For Web Design & Development
                    </p>
               <div className='services-lazy'>
                <img className='w-100' src="https://mandalainfosys.com/wp-content/uploads/2024/03/leaf.png" alt="" />
               </div>
                    
                 </div>
                </div>
            </div>
        </div>
      </section>

      {/* second row */}

      <section className='body-b'>
        <div className="contianerfluid">
                  
            <div className="row py-5 ">
                <div data-aos="fade-right" className="col-lg-5">
                    <div className='services-courses plus-min'>
                       <div>
                       <ul className='text-light d-flex justify-content-between align-items-center'>
                            <li className='first-letter'>01</li>
                            <li><div className='services-circle'>
                            <p><i class="bi bi-arrow-up-right"></i></p>
                                </div></li>
                        </ul>
                       </div>

                       <div className='lh-lg py-4 ps-3'>
                        <h3 className='text-light'>Web Development</h3>

                        <p className='text-white-50 py-3'>A webapp enhances a client's business by expanding their reach, increasing visibility, and providing a convenient platform for customers to access information, products, and services…</p>

                       </div>
                    </div>
                </div>

                <div data-aos="fade-left" className="col-lg-5 offset-2">
                    <div className='services-courses'>
                       <div>
                       <ul className='text-light d-flex justify-content-between align-items-center'>
                            <li className='first-letter'>02</li>
                            <li><div className='services-circle'>
                            <p><i class="bi bi-arrow-up-right"></i></p>
                                </div></li>
                        </ul>
                       </div>

                       <div className='lh-lg py-4 ps-3'>
                        <h3 className='text-light'>Mobile App Development</h3>

                        <p className='text-white-50 py-3'>Introducing a mobile app empowers clients by offering seamless accessibility, personalized interactions, and enhanced convenience, fostering stronger engagement and loyalty among their customers.</p>

                       </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-right" className="row py-5 ">
                <div className="col-lg-5">
                    <div className='services-courses plus3'>
                       <div>
                       <ul className='text-light d-flex justify-content-between align-items-center'>
                            <li className='first-letter'>03</li>
                            <li><div className='services-circle'>
                            <p><i class="bi bi-arrow-up-right"></i></p>
                                </div></li>
                        </ul>
                       </div>

                       <div className='lh-lg py-4 ps-3'>
                        <h3 className='text-light'>Graphics Design</h3>

                        <p className='text-white-50 py-3'>Graphic design is the process of visual and problem-solving using one or more of typography, photography and illustration</p>

                       </div>
                    </div>
                </div>

                <div className="col-lg-5 offset-2">
                    <div className='services-courses'>
                       <div>
                       <ul className='text-light d-flex justify-content-between align-items-center'>
                            <li className='first-letter'>04</li>
                            <li><div className='services-circle'>
                            <p><i class="bi bi-arrow-up-right"></i></p>
                                </div></li>
                        </ul>
                       </div>

                       <div className='lh-lg py-4 ps-3'>
                        <h3 className='text-light'>Digital Marketing
                        </h3>

                        <p className='text-white-50 py-3'>Digital marketing amplifies brand visibility, engages specific audiences, and drives measurable results, essential for business growth in the digital age.</p>

                       </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" className="row py-5 ">
                <div className="col-lg-5">
                    <div className='services-courses plus-min'>
                       <div>
                       <ul className='text-light d-flex justify-content-between align-items-center'>
                            <li className='first-letter'>05</li>
                            <li><div className='services-circle'>
                            <p><i class="bi bi-arrow-up-right"></i></p>
                                </div></li>
                        </ul>
                       </div>

                       <div className='lh-lg py-4 ps-3'>
                        <h3 className='text-light'>Design & Branding</h3>

                        <p className='text-white-50 py-3'>Design & Branding captivates audiences, simplifies complex concepts, and conveys messages dynamically, enhancing engagement and boosting retention in a visually compelling way..</p>

                       </div>
                    </div>
                </div>

                <div className="col-lg-5 offset-2">
                    <div className='services-courses'>
                       <div>
                       <ul className='text-light d-flex justify-content-between align-items-center'>
                            <li className='first-letter'>06</li>
                            <li><div className='services-circle'>
                            <p><i class="bi bi-arrow-up-right"></i></p>
                                </div></li>
                        </ul>
                       </div>

                       <div className='lh-lg py-4 ps-3'>
                        <h3 className='text-light'>UI/UX Design
                        </h3>

                        <p className='text-white-50 py-3'>UI (User Interface) creates the visual appeal, while UX (User Experience) ensures the usability and satisfaction, both crucial for engaging users and driving the success…</p>

                       </div>
                    </div>
                </div>
            </div>
        </div>
      </section>


      {/*  2nd row wrapper */}

       <Wrapper/>
       {/*  3rd row */}
        <section className='body-b py-5'>
            <div className="containerfluid py-5">
                <div className="row">
                    <div className="col-lg-12 d-flex gap-3 py-5 my-5 wrapper-paxi">
                   <div data-aos="flip-left" className='s-before-circle'>
                  <div className='text-light s-circle-words'>
                    <div className='first-line'>
                    <p> Step 01</p>
                    <h5 className='py-4'>Requirements</h5>
                    </div>

                    <div className="second-line py-4">
                        <p className='text-white-50'>
                        Starting point where the  <br />project idea is identified.
                        </p>
                    </div>
                  </div>
                   </div>

                   <div data-aos="flip-right" className='s-before-circle py-5 my-5'>
                  <div className='text-light s-circle-words'>
                    <div className='first-line'>
                    <p> Step 02</p>
                    <h5 className='py-4'>Plan & Design</h5>
                    </div>

                    <div className="second-line py-4">
                        <p className='text-white-50 '>
                        This phase involves <br /> creating a detailed roadmap.
                        </p>
                    </div>
                  </div>
                   </div>


                   <div data-aos="flip-left" className='s-before-circle'>
                  <div className='text-light s-circle-words'>
                    <div className='first-line'>
                    <p> Step 03</p>
                    <h5 className='py-4'>Project Testing</h5>
                    </div>

                    <div className="second-line py-4">
                        <p className='text-white-50'>
                        This phase involves <br /> ongoing monitoring and progress tracking                        </p>
                    </div>
                  </div>
                   </div>


                   <div data-aos="flip-right" className='s-before-circle py-5 my-5'>
                  <div className='text-light s-circle-words'>
                    <div className='first-line'>
                    <p> Step 04</p>
                    <h5 className='py-4'>Maintainance</h5>
                    </div>

                    <div className="second-line py-4">
                        <p className='text-white-50'>
                        The final stage signifies project completion.                        </p>
                    </div>
                  </div>
                   </div>
                    </div>
                </div>
            </div>
        </section>


        <section className='body-b'>
        <div className="containerfluid py-5 ">
      <div className="row">
        <div data-aos="fade-right"  className="col-lg-5">
           <div className='minus-margin'>
            <img className='w-100' src="https://mandalainfosys.com/wp-content/uploads/2024/03/Untitled-design-11.png" alt="" />
           </div>
        </div>

        <div data-aos="fade-left"  className="col-lg-6 offset-1  py-5">
          <Slider2/>
        </div>
      </div>
    </div>
        </section>
    </>
  )
}

export default Services
