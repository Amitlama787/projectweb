import React, { useEffect } from 'react'
import './Comp.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import { faHeadSideVirus } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faMobileButton } from '@fortawesome/free-solid-svg-icons'
import { faUsersRays } from '@fortawesome/free-solid-svg-icons'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import AutoIncreasingNumber from './AutoIncreasingNumber';
import AutoIncreasingNumber2 from './AutoIncreasingNumber2';
import AutoIncreasingNumber3 from './AutoIncreasingNumber3'
import AutoIncreasingNumber4 from './AutoIncreasingNumber4'

import Wrapper from './Wrapper'
import Slider from './Slider'
import Slider2 from './Slider2'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1100, // Duration of animation in milliseconds
     once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
      
    });
  }, []);
  return (
    <>
    
    <section className='home py-5'>
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className='mid-p fw-bold text-center lh-1'>
              <p>Examine the Potential of</p>
              <p><span className='op'>AI Writing</span> AI Hack</p>

              <div>
                 <Link to="/"><img className='imgpurple1' src="https://aiwave-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-shape-one.0dd8e5b5.png&w=256&q=75" alt="" />
</Link>
              </div>
              <div>
                <img className='imgpurple2' src="https://aiwave-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-shape-two.7408134b.png&w=128&q=75" alt="" />
              </div>
              <div>
                <img className='imgpurple3' src="https://aiwave-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-shape-three.b21ea8e8.png&w=96&q=75" alt="" />
              </div>
              <div>
                <img className='imgpurple4' src="https://aiwave-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-shape-four.77f06e0c.png&w=256&q=75" alt="" />
              </div>
            </div>

            <div>
              <h4 className='second text-light text-center py-5'>
             
Unleash Brainwave's AI potential. Use the open AI <br />
conversation app Rainbow theme
              </h4>
            </div>
          </div>
        </div>

          {/* 2nd row */}
        <div className="container-fluid ms-1 my-5 py-5">
          <div className="row">
            <div  className="col-lg-3">
              <div className='ementor'>
                <p className='text-light'>
                We specialize in comprehensive digital solutions, offering expert services in web and app development, graphic design, and animated video production to elevate brands and engage audiences creatively.
                </p>
                <span>
                  <img src="https://mandalainfosys.com/wp-content/uploads/2024/03/Untitled-design-2024-03-19T150223.676.png" alt="" />
                </span>
                <div className='logohead d-flex me-3'>
                <ul>
                  <li><img src="https://mandalainfosys.com/wp-content/uploads/2024/03/Untitled-design-2024-03-26T151532.042.png" alt="" srcset="" /></li>
                </ul>
                <ul className='text-light'>
                  <li>30+ Popular  </li>
                    <li>Clients</li>
                </ul>
                </div>
              </div>
            </div>
              
             
            <div className="col-lg-5 offset-1">
               <div className='biz'>
                <img width='100%' src="https://mandalainfosys.com/wp-content/uploads/2024/03/Untitled-design-2024-03-19T144655.093.png" alt="" />
               </div>
            </div>
            


            <div className="col-lg-2 offset-1">
              <div className='ementor green-circle'>
                <ul className='text-light lh-lg green-circle-explore'>
                  <li><i class="bi bi-arrow-up-right"></i></li>
                   <li>Explore <br />More</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd row */}
        <div className="containerfluid mx-3 my-5 py-5">
          <div className="row">
            <div data-aos="fade-right" data-aos-delay="50" className="col-lg-7 ">
               <div className='green-box d-flex mx-3'> 
                <div className='ms-2'>
                  <img src="https://mandalainfosys.com/wp-content/uploads/2024/03/Untitled-design.png" alt="" />
                </div>
                <div>
                  <ul className=''>
                    <li><span className='heading1 py-5'>25+</span></li>
                    <li className='h4'>Project Complete</li>
                    <li className=' borderinheading1 py-3'></li>
                    <li className='py-5'><p>
Engage with us to explore cutting-edge solutions and experience a client-focused partnership at the core of our IT services.</p></li>
                     
                    
                  </ul>
                </div>
               </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="50" className="col-lg-5">
              <div className='whitebox py-5'>
                <ul>
                  <li><p className='font27'>Innovative Web <br />
Development Solutions</p></li>
<li className='borderinheading1 py-4'> </li>
          
                </ul>

                <ul className='d-flex justify-content-evenly gap-5 wrap '>
                  <li><img src="https://mandalainfosys.com/wp-content/uploads/2024/03/Untitled-design-2024-03-26T151532.042.png" alt="" /></li>
                  <li>Our web development services encompass a 
                    comprehensive approach to crafting digital
                     solutions that elevate online
                     presence and functionality.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 4th row */}

        <div className="containerfluid">
          <div className="row">
            <div data-aos="zoom-up" className="col-lg-12 text-center">
                 <span className='heading2'>
                 Here are Numerous Topics That <br />Will Enhance Your Skills
                 </span>
            </div>

            <div data-aos="zoom-in-right" className="row py-4 my-3">
              <div  className="col-lg-12 d-flex gap-4 ms-3 smwrap">
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faBootstrap} style={{color: "#7F11F9",}} /></li>
                    <li className='fw-bold text-dark fs-4'>Bootstrap</li>
                  </ul>

                </div>

                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faHtml5} style={{color: "#0c6f29",}} />
</li>
                    <li className='fw-bold text-dark fs-4'>HTML</li>
                  </ul>

                </div>
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faCss3Alt} style={{color: "#350bb1",}} /></li>
                    <li className='fw-bold text-dark fs-4'>CSS</li>
                  </ul>

                </div>
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'> <FontAwesomeIcon icon={faSass} /></li>
                    <li className='fw-bold text-dark fs-4'>Sass</li>
                  </ul>

                </div>
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} />
</li>
                    <li className='fw-bold text-dark fs-4'>Java Script</li>
                  </ul>

                </div>

              </div>
             
            </div>

            <div data-aos="zoom-in-left" className="row py-4 my-3">
              <div className="col-lg-12 d-flex gap-4 ms-3 smwrap">
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faBootstrap} style={{color: "#7F11F9",}} /></li>
                    <li className='fw-bold text-dark fs-4'>Bootstrap</li>
                  </ul>

                </div>

                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faHtml5} style={{color: "#0c6f29",}} />
</li>
                    <li className='fw-bold text-dark fs-4'>HTML</li>
                  </ul>

                </div>
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faCss3Alt} style={{color: "#350bb1",}} /></li>
                    <li className='fw-bold text-dark fs-4'>CSS</li>
                  </ul>

                </div>
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'> <FontAwesomeIcon icon={faSass} /></li>
                    <li className='fw-bold text-dark fs-4'>Sass</li>
                  </ul>

                </div>
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} />
</li>
                    <li className='fw-bold text-dark fs-4'>Java Script</li>
                  </ul>

                </div>

              </div>
             
            </div>
            <div data-aos="zoom-in-right" className="row py-4 my-3 d-none d-lg-block">
              <div className="col-lg-12 d-flex gap-4 ms-3 ">
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faBootstrap} style={{color: "#7F11F9",}} /></li>
                    <li className='fw-bold text-dark fs-4'>Bootstrap</li>
                  </ul>

                </div>

                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faHtml5} style={{color: "#0c6f29",}} />
</li>
                    <li className='fw-bold text-dark fs-4'>HTML</li>
                  </ul>

                </div>
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faCss3Alt} style={{color: "#350bb1",}} /></li>
                    <li className='fw-bold text-dark fs-4'>CSS</li>
                  </ul>

                </div>
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'> <FontAwesomeIcon icon={faSass} /></li>
                    <li className='fw-bold text-dark fs-4'>Sass</li>
                  </ul>

                </div>
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} />
</li>
                    <li className='fw-bold text-dark fs-4'>Java Script</li>
                  </ul>

                </div>

              </div>
             
            </div>
            <div data-aos="zoom-in-left" className="row py-4 my-3 d-none d-lg-block">
              <div className="col-lg-12 d-flex gap-4 ms-3">
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faBootstrap} style={{color: "#7F11F9",}} /></li>
                    <li className='fw-bold text-dark fs-4'>Bootstrap</li>
                  </ul>

                </div>

                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faHtml5} style={{color: "#0c6f29",}} />
</li>
                    <li className='fw-bold text-dark fs-4'>HTML</li>
                  </ul>

                </div>
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faCss3Alt} style={{color: "#350bb1",}} /></li>
                    <li className='fw-bold text-dark fs-4'>CSS</li>
                  </ul>

                </div>
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'> <FontAwesomeIcon icon={faSass} /></li>
                    <li className='fw-bold text-dark fs-4'>Sass</li>
                  </ul>

                </div>
                <div className='front'>
                  <ul className='d-flex gap-3 align-items-center '>
                    <li className='fs-1'><FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} />
</li>
                    <li className='fw-bold text-dark fs-4'>Java Script</li>
                  </ul>

                </div>

              </div>
             
            </div>
          </div>
        </div>


        <div className="containerfluid my-5 py-5 mx-2">
          <div className="row">
            <div data-aos="fade-right" className="col-lg-6">
              <div>
                <ul className='d-flex gap-3 align-items-center'>
                  <li className='fs-2'> <FontAwesomeIcon icon={faArrowRight} size='' style={{ color: "#0dd311", }} /></li>
                  <li className='fs-5 color-green'>About Company</li>
                </ul>
                <h1 className='top-web ps-3'>Nepal's Top Web
                  Development Agency</h1>
                <ul className='d-flex gap-4 align-items-center me-2 pe-3'>
                  <li className='fs-1'><FontAwesomeIcon icon={faGripLinesVertical} style={{ color: "#40d317", }} />
                  </li>
                  <li><p className='text-light py-4 my-4 me-3 '>
At our company, providing the best service is our commitment. We strive to deliver unparalleled solutions, leveraging expertise and innovation to meet and exceed your expectations.</p></li>


                </ul>
              </div>
            </div>

            <div data-aos="fade-left" className="col-lg-5 offset-1">
              <div>
                <img className='row-4' src="https://mandalainfosys.com/wp-content/uploads/2024/03/about-image-shape-min.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* 5th row */}

        <div className="container-fluid">
          <div className="row">
            <div data-aos="zoom-in" className="col-lg-12">
              <div className='text-center'>
              <li className='fs-2 d-flex  justify-content-center gap-2 text-light'> <FontAwesomeIcon icon={faArrowRight} size='' style={{ color: "#0dd311", }} /> <p className='fs-5'>Popular Services</p> </li>
              <li>  <h1 className='top-web ps-3'>
              We Provide Amazing Web
              <br /> Design Solutions
                </h1></li>

              </div>
            </div>
          </div>
          <div className="row gx-3 py-5 my-5">
            <div data-aos="fade-up" className="col-lg-3">
              <div className='card'>
           <ul>
            <li className='web'><FontAwesomeIcon icon={faHeadSideVirus} />
            <li className='fs-5 fw-bold webdev'>Web Development</li>
            <li className='abo-ig'><img src="https://mandalainfosys.com/wp-content/uploads/2024/03/service1.jpg" alt="" /></li>
</li>
           </ul>

           <div className='arrow-box'>
           <p><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#12af32",}} />
</p>
           </div>
              </div>
            </div>

            <div data-aos="fade-down" className="col-lg-3">
              <div className='card'>
           <ul>
            <li className='web'><FontAwesomeIcon icon={faMobileButton} />
            <li className='fs-5 fw-bold webdev'>Mobile Application</li>
            <li className='abo-ig'><img src="https://mandalainfosys.com/wp-content/uploads/2024/03/service2.jpg" alt="" /></li>
</li>
           </ul>

           <div className='arrow-box'>
           <p><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#12af32",}} />
</p>
           </div>
              </div>
            </div>

            <div data-aos="fade-up" className="col-lg-3">
              <div className='card'>
           <ul>
            <li className='web'><FontAwesomeIcon icon={faUsersRays} />

            <li className='fs-5 fw-bold webdev'>Digital Marketing</li>
            <li className='abo-ig'><img src="https://mandalainfosys.com/wp-content/uploads/2024/03/service3.jpg" alt="" /></li>
</li>
           </ul>

           <div className='arrow-box'>
           <p><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#12af32",}} />
</p>
           </div>
              </div>
            </div>
            <div data-aos="fade-down" className="col-lg-3">
              <div className='card'>
           <ul>
            <li className='web'> <FontAwesomeIcon icon={faGears} />

            <li className='fs-5 fw-bold webdev'>Design & Branding</li>
            <li className='abo-ig'><img src="https://mandalainfosys.com/wp-content/uploads/2024/03/service4.jpg" alt="" /></li>
</li>
           </ul>

           <div className='arrow-box'>
           <p><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#12af32",}} />
</p>
           </div>
              </div>
            </div>
          </div>
        </div>
     {/* 6th row */}


     <Wrapper/>

     {/* 7th row */}



     <div className="containerfluid my-5 py-5 mx-2  ">
          <div className="row">
            <div data-aos="fade-right"  className="col-lg-6">
              <div>
                <ul className='d-flex gap-3 align-items-center'>
                  <li className='fs-2'> <FontAwesomeIcon icon={faArrowRight} size='' style={{ color: "#0dd311", }} /></li>
                  <li className='fs-5 color-green'>Recent Works Gallery</li>
                </ul>
                <h1 className='top-web ps-3'>
                Let’s Look Our Recent <br /> Project Gallery
                  </h1>
              
              </div>
            </div>

            <div data-aos="fade-left" className="col-lg-2 offset-4 py-3 pe-3">
              <div className='ementor green-circle'>
                <ul className='text-light lh-lg green-circle-explore'>
                  <li><i class="bi bi-arrow-up-right"></i></li>
                   <li>Explore <br />More</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


 {/* left title */}
        <div data-aos="fade-right" className="containerfluid ">
          <div className="row">
            <div data-aos="fade-right" className="col-lg-6">
              <div className='big-title'>
                <ul className='text-light d-flex gap-5'>
                  <li><h5>01</h5></li>
                  <li><h3 className='title'>
                    <span className='title-inside'>Business Task Management </span><br />
                    Dashboard Design
                  </h3></li>
                  <li><h3 className='arow'><li><FontAwesomeIcon icon={faArrowRight} /></li></h3></li>
                 
                </ul>
                <ul className='text-light d-flex gap-5 py-4 my-5'>
                  <li><h5>01</h5></li>
                  <li><h3 className='title'>
                    <span className='title-inside'>Mobile Application Design &
                    </span><br />
                    Development
                  </h3></li>
                  <li><h3 className='arow'><li><FontAwesomeIcon icon={faArrowRight} /></li></h3></li>
                 
                </ul>

                <ul className='text-light d-flex gap-5 py-4 my-5'>
                  <li><h5>01</h5></li>
                  <li><h3 className='title'>
                    <span className='title-inside'>eCommerce React Website
                   </span><br />
                   Development 
                  </h3></li>
                  <li><h3 className='arow'><li><FontAwesomeIcon icon={faArrowRight} /></li></h3></li>
                 
                </ul>

              </div>
            </div>
   {/* right title */}
            <div data-aos="fade-left" className="col-lg-6">
              <div>
                <ul className='text-light d-flex gap-5'>
                  <li><h5>01</h5></li>
                  <li><h3 className='title'>
                    <span className='title-inside'>PSD, Figma & XD to HTML

 </span><br />
 Design & Development
                  </h3></li>
                  <li><h3 className='arow'><li><FontAwesomeIcon icon={faArrowRight} /></li></h3></li>
                 
                </ul>
                <ul className='text-light d-flex gap-5 py-4 my-5'>
                  <li><h5>01</h5></li>
                  <li><h3 className='title'>
                    <span className='title-inside'>Business Development and

 </span><br />
 Marketing Strategy
                  </h3></li>
                  <li><h3 className='arow'><li><FontAwesomeIcon icon={faArrowRight} /></li></h3></li>
                 
                </ul>

                <ul className='text-light d-flex gap-5 py-4 my-5'>
                  <li><h5>01</h5></li>
                  <li><h3 className='title'>
                    <span className='title-inside'>3D Flat UI UX Landing Page

</span><br />
Design & Development
                  </h3></li>
                  <li><h3 className='arow'><li><FontAwesomeIcon icon={faArrowRight} /></li></h3></li>
                 
                </ul>

              </div>
            </div>
          </div>
        </div>

        {/* 8th row slider */}

        <div className="container py-5 my-5">
          <div className="row">
          <div data-aos="zoom-in" className="col-lg-12">
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
      
        <Slider/>

        {/* 9th row */}

        <div data-aos="zoom-in" className="container my-5 py-5 ">
          <div className="row ">
            <div className="col-lg-12 d-flex column ">
              <div className='ninerow'>
                <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>
                 <div className='font'>
                 <span className='one'> <AutoIncreasingNumber start={1} interval={100} end={5} /></span>
              
                 </div>
                <h5 className='text-light fw-bold'>Years Of Experience</h5>

              </div>

              <div className='ninerow'>
                <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>
                <h1 className='one'><AutoIncreasingNumber2 start={1} interval={100} end={30} /></h1>
                <h5 className='text-light fw-bold'>Project’s Complete</h5>
              </div>


              <div className='d-flex gap-5 column2 d-none d-lg-block'>
                 <div className='d-flex gap-5'>
                 <div className='ninerow'>
                <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>
                <h1 className='one'> <AutoIncreasingNumber3 start={1} interval={1000} end={5} /> </h1>
                <h5 className='text-light fw-bold'>Professionals <br /> Team Member</h5>
                 
              </div>

              <div className='ninerow pading '>
                <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>
                <h1 className='one'>  <AutoIncreasingNumber4 start={1} interval={3} end={500} /> </h1>
                <h5 className='text-light fw-bold '>Cup Of Coffee</h5>
              </div>
                 </div>


              
            </div>

              </div>
               <div className='d-flex gap-5 column2 d-lg-none d-block'>
               <div className='ninerow'>
                <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>
                <h1 className='one'> <AutoIncreasingNumber3 start={1} interval={1000} end={5} /> </h1>
                <h5 className='text-light fw-bold'>Professionals <br /> Team Member</h5>
                 
              </div>

              <div className='ninerow pading '>
                <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>
                <h1 className='one'>  <AutoIncreasingNumber4 start={1} interval={3} end={500} /> </h1>
                <h5 className='text-light fw-bold '>Cup Of Coffee</h5>
              </div>


              
            </div>
          </div>
        </div>
   {/* 10th row */}

   <div className="containerfluid my-5 ms-5">
    <div className="row">
      <div  data-aos="zoom-in" className="col-lg-12 text-center">
        
          <div className='d-flex text-light align-items-center gap-3 justify-content-center'>
         
         <p  className='fs-3'> <FontAwesomeIcon icon={faArrowRight} size='' style={{ color: "#0dd311", }} /></p> <p className='fs-4'>Popular Services</p>

          
        </div>

        <div className='my-5'>
          <h1 className='top-web'>Best Pricing Package For All <br /> Web Design Solutions</h1>
        </div>
      
      </div>

      <div className="row">
        <div data-aos="fade-right" className="col-lg-4">
          <div className='silverpackage'>
            <p className=' tenicon'><i class="bi bi-regex"></i></p>
            <h4 className='text-light'>Regular Package</h4>
            <nav>
              <ul className='text-light p-0 py-5'>
                <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>24/7 system monitoring</li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>CMS website design </li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p> Responsive & Interactive Design </li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>Number of pages / menus / categories as per initial requirement </li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p> Search Engine friendly</li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>Advanced Real Time Search</li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p> Logo Design</li>
                      <li className='d-flex gap-3'>   <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>Newsletter Subscription</li>
              </ul>
            </nav>
            <button className='pack'>Choose Package  <i class="bi bi-arrow-up-right"></i></button>
          </div>
        </div>


        <div data-aos="fade-up" className="col-lg-4">
          <div className='silverpackage'>
            <p className=' tenicon'><i class="bi bi-sliders"></i></p>
            <h4 className='text-light'>Silver Package</h4>
            <nav>
              <ul className='text-light p-0 py-5'>
                <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>24/7 system monitoring</li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>CMS website design </li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p> Responsive & Interactive Design </li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>Number of pages / menus / categories as per initial requirement </li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p> Search Engine friendly</li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>Advanced Real Time Search</li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p> Logo Design</li>
                      <li className='d-flex gap-3'>   <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>Newsletter Subscription</li>
              </ul>
            </nav>

             <button className='pack'>Choose Package  <i class="bi bi-arrow-up-right"></i></button>
          </div>
        </div>


        <div data-aos="fade-left" className="col-lg-4 ">
          <div className='silverpackage'>
            <p className=' tenicon'><i class="bi bi-radioactive"></i></p>
            <h4 className='text-light'>Golden Package
            </h4>
            <nav>
              <ul className='text-light p-0 py-5'>
                <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>24/7 system monitoring</li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>CMS website design </li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p> Responsive & Interactive Design </li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>Number of pages / menus / categories as per initial requirement </li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p> Search Engine friendly</li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>Advanced Real Time Search</li>
                      <li className='d-flex gap-3'>  <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p> Logo Design</li>
                      <li className='d-flex gap-3'>   <p className='check'><FontAwesomeIcon icon={faCircleCheck} /></p>Newsletter Subscription</li>
              </ul>
            </nav>
            <button className='pack'>Choose Package  <i class="bi bi-arrow-up-right"></i></button>
          </div>
        </div>
      </div>
    </div>
   </div>
     

      {/* Wrapper */}




      <Wrapper/>




      {/*  */}
    {/* 11th row */}

    <div className="containerfluid my-4 py-5">
      <div className="row">
        <div data-aos="fade-right" className="col-lg-5">
           <div>
            <img className='w-100' src="https://mandalainfosys.com/wp-content/uploads/2024/03/testimonial-left-img-min.png" alt="" />
           </div>
        </div>

        <div data-aos="fade-left"  className="col-lg-6 offset-1 py-5 my-5">
          <Slider2/>
        </div>
      </div>
    </div>


    {/* 12 th row */}
    <div data-aos="zoom-in" className="container py-5 my-5">
          <div className="row">
          <div className="col-lg-12">
            <div>

              <ul className='d-flex team  justify-content-center gap-3'>
                <li> <FontAwesomeIcon icon={faArrowRight} size='' style={{ color: "#0dd311", }} /></li>
                <li>Blog & News</li>
              </ul>

              <div>
                <div className="team-heading">Read Our Latest News & Blog Get  <br />Every Update</div>
              </div>
            </div>
          </div>
          </div>

       
        </div>

        <div className="container-fluid">
         <div className="row">
            <div data-aos="flip-left" className="col-lg-4">
              <div className="cards">
                <div className='card2nd'>
                  <img className='w-100 h-100' src="https://mandalainfosys.com/wp-content/uploads/2024/03/2149151159.jpg" alt="" />
               
                </div>
                <div className='cards-text py-4'>
                  5 Ways to Improve Your Business Efficiency with Technology And IT Company
                  </div>
                  <div className='cards-circle'>
                     <p><a href=""><i class="bi bi-arrow-up-right"></i></a></p>
                  </div>
              </div>
            </div>

            <div data-aos="flip-right" className="col-lg-4">
              <div className="cards">
                <div className='card2nd'>
                  <img className='w-100 h-100' src="https://mandalainfosys.com/wp-content/uploads/2023/04/2150041850.jpg" alt="" />
               
                </div>
                <div className='cards-text py-4'>
                The Ultimate Guide to Cybersecurity for Businesses
                </div>
                  <div className='cards-circle'>
                     <p><a href=""><i class="bi bi-arrow-up-right"></i></a></p>
                  </div>
              </div>
            </div>


            <div data-aos="flip-left" className="col-lg-4">
              <div className="cards">
                <div className='card2nd'>
                  <img className='w-100 h-100' src="https://mandalainfosys.com/wp-content/uploads/2024/03/2150714247.jpg" alt="" />
               
                </div>
                <div className='cards-text py-4'>
                The Latest Trends in Artificial Intelligence and Machine Learning: Shaping the Future                  </div>
                  <div className='cards-circle'>
                     <p><a href=""><i class="bi bi-arrow-up-right"></i></a></p>
                  </div>
              </div>
            </div>
          </div>
         </div>
      {/*  */}

    
      </section>
    </>
  )
}

export default Home
