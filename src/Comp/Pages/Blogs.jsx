import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Pages.css'

function Blogs() {
    useEffect(() => {
        AOS.init({
          duration: 1100, // Duration of animation in milliseconds
         once: true, // Whether animation should happen only once - while scrolling down
          mirror: false, // Whether elements should animate out while scrolling past them
          
        });
      }, []);
  return (
    <>
       <div className="blogs-body">
       <section className='back-b'>
        <div className="row">
        <div className="col-lg-12 py-5 my-5">
                    <div className='text-center'>
                        <h1 className='text-ligh port-heading'>Blog</h1>
                        <ul className='d-flex justify-content-center gap-3 py-5 me-4'>
                            <li className='port-w-home'><Link to="/">Home</Link>
                            </li>
                            <li className=' port-w-icon'><i class="bi bi-caret-right"></i></li>
                            <li className='port-w-port'>
                            Blog</li>
                        </ul>
                    </div>
                </div>
        </div>
      </section>

      {/* 2nd row */}

      <section className='back-b'>
        <div className="containerfluid">
            <div className="row">
            <div data-aos="flip-left" className="col-lg-4">
              <div className="cards">
                <div className='card2nd'>
                  <img className='w-100 h-100' src="https://mandalainfosys.com/wp-content/uploads/2024/03/2149151159.jpg" alt="" />
                </div>
                <nav className='d-flex justify-content-between  blogs-nav'>
                        <ul className='d-flex gap-2 me-2 '>
                            <li className='text-white-50'><i class="bi bi-calendar-week-fill"></i></li>
                            <li className='text-white-50'>MARCH 18, 2024</li>
                        </ul>

                        <ul className='d-flex gap-2'>
                            <li className='text-white-50'><i class="bi bi-chat-dots"></i></li>
                            <li className='text-white-50'>COMMENTS (1)</li>
                        </ul>
                    </nav>
                <div className='cards-text py-4'>
                  5 Ways to Improve Your Business Efficiency with Technology And IT Company
                  </div>
                  <div className='blogs-word py-3'>
                  Read More <span className='blogs-word'><i class="bi bi-arrow-up-right"></i></span>

                  </div>
                  <div className='cards-circle d-none'>
                     <p><a href=""><i class="bi bi-arrow-up-right"></i></a></p>
                  </div>
              </div>
            </div>

            <div data-aos="flip-left" className="col-lg-4">
              <div className="cards">
                <div className='card2nd'>
                  <img className='w-100 h-100' src="https://mandalainfosys.com/wp-content/uploads/2023/04/2150041850.jpg" alt="" />
                </div>
                <nav className='d-flex justify-content-between  blogs-nav'>
                        <ul className='d-flex gap-2 me-2 '>
                            <li className='text-white-50'><i class="bi bi-calendar-week-fill"></i></li>
                            <li className='text-white-50'>MARCH 18, 2024</li>
                        </ul>

                        <ul className='d-flex gap-2'>
                            <li className='text-white-50'><i class="bi bi-chat-dots"></i></li>
                            <li className='text-white-50'>COMMENTS (1)</li>
                        </ul>
                    </nav>
                <div className='cards-text py-4'>
                The Ultimate Guide to Cybersecurity for Businesses
                  </div>
                  <div className='blogs-word py-3'>
                  Read More <span className='blogs-word'><i class="bi bi-arrow-up-right"></i></span>

                  </div>
                  <div className='cards-circle d-none'>
                     <p><a href=""><i class="bi bi-arrow-up-right"></i></a></p>
                  </div>
              </div>
            </div>

            <div data-aos="flip-left" className="col-lg-4">
              <div className="cards">
                <div className='card2nd'>
                  <img className='w-100 h-100' src="https://mandalainfosys.com/wp-content/uploads/2024/03/2150714247.jpg" alt="" />
                </div>
                <nav className='d-flex justify-content-between  blogs-nav'>
                        <ul className='d-flex gap-2 me-2 '>
                            <li className='text-white-50'><i class="bi bi-calendar-week-fill"></i></li>
                            <li className='text-white-50'>MARCH 18, 2024</li>
                        </ul>

                        <ul className='d-flex gap-2'>
                            <li className='text-white-50'><i class="bi bi-chat-dots"></i></li>
                            <li className='text-white-50'>COMMENTS (1)</li>
                        </ul>
                    </nav>
                <div className='cards-text py-4'>
                The Latest Trends in Artificial Intelligence and Machine Learning: Shaping the Future                  </div>
                  <div className='blogs-word py-3'>
                  Read More <span className='blogs-word'><i class="bi bi-arrow-up-right"></i></span>

                  </div>
                  <div className='cards-circle d-none'>
                     <p><a href=""><i class="bi bi-arrow-up-right"></i></a></p>
                  </div>
              </div>
            </div>
            </div>
        </div>



 {/* 3rd row */}
        <div className="containerfluid py-4 ">
            <div className="row">
            <div data-aos="flip-left" className="col-lg-4">
              <div className="cards">
                <div className='card2nd'>
                  <img className='w-100 h-100' src="https://mandalainfosys.com/wp-content/uploads/2023/04/1626.jpg" alt="" />
                </div>
                <nav className='d-flex justify-content-between  blogs-nav'>
                        <ul className='d-flex gap-2 me-2 '>
                            <li className='text-white-50'><i class="bi bi-calendar-week-fill"></i></li>
                            <li className='text-white-50'>MARCH 18, 2024</li>
                        </ul>

                        <ul className='d-flex gap-2'>
                            <li className='text-white-50'><i class="bi bi-chat-dots"></i></li>
                            <li className='text-white-50'>COMMENTS (1)</li>
                        </ul>
                    </nav>
                <div className='cards-text py-4'>
                The Future of Work: How Technology is Reshaping Our Workplaces                  </div>
                  <div className='blogs-word py-3'>
                  Read More <span className='blogs-word'><i class="bi bi-arrow-up-right"></i></span>

                  </div>
                  <div className='cards-circle d-none'>
                     <p><a href=""><i class="bi bi-arrow-up-right"></i></a></p>
                  </div>
              </div>
            </div>

            <div data-aos="flip-left" className="col-lg-4">
              <div className="cards">
                <div className='card2nd'>
                  <img className='w-100 h-100' src="https://mandalainfosys.com/wp-content/uploads/2024/03/13569.jpg" alt="" />
                </div>
                <nav className='d-flex justify-content-between  blogs-nav'>
                        <ul className='d-flex gap-2 me-2 '>
                            <li className='text-white-50'><i class="bi bi-calendar-week-fill"></i></li>
                            <li className='text-white-50'>MARCH 18, 2024</li>
                        </ul>

                        <ul className='d-flex gap-2'>
                            <li className='text-white-50'><i class="bi bi-chat-dots"></i></li>
                            <li className='text-white-50'>COMMENTS (1)</li>
                        </ul>
                    </nav>
                <div className='cards-text py-4'>
                The Importance of SEO in Digital Marketing: Tips for Agencies                  </div>
                  <div className='blogs-word py-3'>
                  Read More <span className='blogs-word'><i class="bi bi-arrow-up-right"></i></span>

                  </div>
                  <div className='cards-circle d-none'>
                     <p><a href=""><i class="bi bi-arrow-up-right"></i></a></p>
                  </div>
              </div>
            </div>

            <div data-aos="flip-left" className="col-lg-4">
              <div className="cards">
                <div className='card2nd'>
                  <img className='w-100 h-100' src="https://mandalainfosys.com/wp-content/uploads/2023/04/2150063134.jpg" alt="" />
                </div>
                <nav className='d-flex justify-content-between  blogs-nav'>
                        <ul className='d-flex gap-2 me-2 '>
                            <li className='text-white-50'><i class="bi bi-calendar-week-fill"></i></li>
                            <li className='text-white-50'>MARCH 18, 2024</li>
                        </ul>

                        <ul className='d-flex gap-2'>
                            <li className='text-white-50'><i class="bi bi-chat-dots"></i></li>
                            <li className='text-white-50'>COMMENTS (1)</li>
                        </ul>
                    </nav>
                <div className='cards-text py-4'>
                Why Your Agency Needs to Embrace Social Media Marketing For Growth                  <div className='blogs-word py-3'>
                  Read More <span className='blogs-word'><i class="bi bi-arrow-up-right"></i></span>

                  </div>
                  <div className='cards-circle d-none'>
                     <p><a href=""><i class="bi bi-arrow-up-right"></i></a></p>
                  </div>
              </div>
            </div>
            </div>
        </div>
        </div>
      </section>
       </div>
    </>
  )
}

export default Blogs
