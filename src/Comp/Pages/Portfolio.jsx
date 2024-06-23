import React, { useEffect } from 'react'
import './Pages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


function Portfolio() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animations in ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
    <section className='back-b'>
        <div  className="container">
            <div className="row">
                <div data-aos="fade-up" className='col-lg-12 py-5 my-5'>
                    <div className='text-center'>
                        <h1 className='text-ligh port-heading'>Portfolio</h1>
                        <ul className='d-flex justify-content-center gap-3 py-5 me-4'>
                            <li className='port-w-home'> <Link to="/">Home</Link>
                            </li>
                            <li className=' port-w-icon'><i class="bi bi-caret-right"></i></li>
                            <li className='port-w-port'>
                            Portfolio</li>
                        </ul>
                    </div>
                </div>

                

               <div data-aos="fade-right" className="col-lg-12">
                 <div className='port-main'>
                     <div className='port-img2'>
                        <img className='w-50' src="https://mandalainfosys.com/wp-content/uploads/2023/05/firefly-qgehsvldopv042imuwiwbddhtghcq7j0ei28w3kqiu.png" alt="" />
                        <div className='port-circle2'>
                           <p><i class="bi bi-arrow-up-right"></i></p>
                        </div>
                     </div>

                     <div className='port-aside2'>
                         <h2>Technology</h2>
                         <h1>FireFly</h1>
                     </div>

                   
                 </div>
               </div>
              

               <section className=''>
               <div className="container-fluid">
                <div className="row gx-3 ">
                <div className="col-lg-6">
                 <div className='port-main d-flex gap-4 align-items-center'>
                     <div data-aos="fade-right" className='port-img2'>
                        <img className='w-100' src="https://mandalainfosys.com/wp-content/uploads/2023/05/434260222_122123632754219921_7764761543872965788_n.jpg" alt="" />
                        <div className='port-circle3'>
                           <p><i class="bi bi-arrow-up-right"></i></p>
                        </div>
                     </div>

                     <div data-aos="fade-left" className='port-aside3'>
                         <h2>Graphics Design</h2>
                         <h1>Seven+7 <span className='span-color'>Enterprises</span></h1>
                     </div>

                   
                 </div>
               </div>
              


               <div data-aos="fade-left" className="col-lg-6">
                 <div className='port-main d-flex gap-4 align-items-center'>
                     <div className='port-img2'>
                        <img className='w-100' src="https://mandalainfosys.com/wp-content/uploads/2023/05/firefly-qgehsvldopv042imuwiwbddhtghcq7j0ei28w3kqiu.png" alt="" />
                        <div className='port-circle3'>
                           <p><i class="bi bi-arrow-up-right"></i></p>
                        </div>
                     </div>

                     <div className='port-aside3'>
                         <h2>Technology</h2>
                         <h1>FireFly</h1>
                     </div>

                   
                 </div>
               </div>




               <div className="col-lg-12">
                 <div className='port-main'>
                     <div data-aos="fade-right" className='port-img2'>
                        <img className='w-50' src="https://mandalainfosys.com/wp-content/uploads/2023/05/thanka-qgbm3smkyxjwg310frag5wgtg6dblcg6tgjazknk92.png" alt="" />
                        <div className='port-circle2'>
                           <p><i class="bi bi-arrow-up-right"></i></p>
                        </div>
                     </div>

                     <div data-aos="fade-left" className='port-aside2'>
                         <h2>Technology</h2>
                         <h1>Zorig <span className='span-color'> Thangka</span></h1>
                     </div>

                   
                 </div>
               </div>
                

               <div className="col-lg-6">
                 <div data-aos="fade-right" className='port-main d-flex gap-4 align-items-center'>
                     <div className='port-img2'>
                        <img className='w-100' src="https://mandalainfosys.com/wp-content/uploads/2023/05/otish-qgblw73jq55glk2bsz20ibhol1tidfaarup0c1x4jq.png" alt="" />
                        <div className='port-circle3'>
                           <p><i class="bi bi-arrow-up-right"></i></p>
                        </div>
                     </div>

                     <div  className='port-aside3'>
                         <h2> Web Development</h2>
                         <h1>Otis  <span className='span-color'>Health</span></h1>
                     </div>

                   
                 </div>
               </div>
              


               <div className="col-lg-6">
                 <div data-aos="fade-right" className='port-main d-flex gap-4 align-items-center'>
                     <div className='port-img2'>
                        <img className='w-100' src="https://mandalainfosys.com/wp-content/uploads/2023/04/dnb-qgbmrzyyycopelvc3pxlval44d2ksrjd59aev2rm12.png" alt="" />
                        <div className='port-circle3'>
                           <p><i class="bi bi-arrow-up-right"></i></p>
                        </div>
                     </div>

                     <div className='port-aside3'>
                         <h2>Web Development</h2>
                         <h1>DNB Multi <span className='span-color'>Business</span></h1>
                     </div>

                   
                 </div>
               </div>
                </div>
               </div>
              
               </section>

             
            </div>
        </div>
    </section>

    {/* last part */}

    <section className='back-b py-5'>

    <div className="containerfluid mx-3">
            <div className="row">
              <div data-aos="fade-up" className="col-lg-12">
                <div className='text-center'>
                  <li className='fs-2 d-flex  justify-content-center gap-2 text-light'> <FontAwesomeIcon icon={faArrowRight} size='' style={{ color: "#0dd311", }} /> <p className='fs-5'>
                  Work With Us</p> </li>
                  <li>  <h1 className='top-web ps-3'>
                  Have Any Projects In Mind? Feel  <br />Free to Contact Us
                  </h1></li>

                </div>
              </div>
            </div>

     

            
          </div>

          <div className="col-lg-12 d-flex justify-content-center ">
              <div className='ementor green-circle port-ova'>
                <ul className='text-light lh-lg green-circle-explore'>
                  <li><i class="bi bi-arrow-up-right"></i></li>
                   <li>Explore <br />More</li>
                </ul>
              </div>
            </div>


            
    </section>
      
    </>
  )
}

export default Portfolio
