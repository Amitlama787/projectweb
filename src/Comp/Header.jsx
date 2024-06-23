import React, { useEffect, useState } from 'react'
import './Comp.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contactus from './Pages/Contactus'
import Aboutus from './Pages/Aboutus'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Blogs from './Pages/Blogs'

function Header() {
    let[ishead,setIshead]=useState('')
    useEffect(()=>{
        window.addEventListener('scroll',()=>{

            if (scrollY > 100)
                {
                    setIshead('aa')
                }
                else 
                {
                    setIshead('ac')
                }
        })
    })
    return (

        <>
            <section className={ishead}>
                <header className='d-none d-lg-block'>
                    <div className="container-fluid">
                        <div classname="row  d-flex ">

                            <div className="col-lg-12 d-flex align-items-center gap-3 justify-content-between ">
                                <div className='me-2'>
                                    <img width={150} src="https://mandalainfosys.com/wp-content/uploads/2024/06/logomandala.png" alt="" />
                                </div>
                                <nav className='hero py-3'>
                                    <ul className='d-flex gap-4 align-items-center'>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about/">About</Link></li>

                                        <li><Link to="/services/">Our Services</Link></li>

                                        <li><Link to="/portfolios/">Portfolio</Link></li>
                                        <li><Link to="/blogs/">Blog</Link></li>
                                        <li><Link to="/contactus">Contact</Link></li>
                                        <li><Link to=""><button className='py-2 px-4 btn'>Get Started</button></Link></li>
                                    </ul>

                                </nav>
                            </div>


                        </div>

                    </div>
                </header>
            </section>

            <div className='d-sm-block d-lg-none'>
          <nav className="navbar navbar-dark bg fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img className='off-img' src="https://mandalainfosys.com/wp-content/uploads/2024/06/logomandala.png" alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="offcanvas w-100 off-scroll offcanvas-start text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><img className='off-img' src="https://mandalainfosys.com/wp-content/uploads/2024/06/logomandala.png" alt="" /></h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
      <ul class="list-group list-group-flush bg-dark lh-lg">
  <li data-bs-dismiss="offcanvas" aria-label="Close" class="list-group-item  bg-dark text-light border-bottom-white"><Link
   to="/">Home</Link></li>
  <li data-bs-dismiss="offcanvas" aria-label="Close" class="list-group-item bg-dark text-light border-bottom-white"><Link to="/about/">About</Link></li>
  <li data-bs-dismiss="offcanvas" aria-label="Close"   class="list-group-item bg-dark text-light border-bottom-white"><Link  to="/services/">Our Services</Link></li>
  <li data-bs-dismiss="offcanvas" aria-label="Close" class="list-group-item bg-dark text-light border-bottom-white"><Link  to="portfolios/">Portfolio</Link></li>
  <li data-bs-dismiss="offcanvas" aria-label="Close" class="list-group-item bg-dark text-light border-bottom-white"><Link to="/blogs/">Blog</Link></li>
  <li data-bs-dismiss="offcanvas" aria-label="Close" class="list-group-item bg-dark text-light border-bottom-white"><Link  to="/contactus/">Contact</Link></li>
</ul>
       
      </div>
    </div>
  </div>
</nav>

            </div>
            

            <Routes>
                <Route path='/' element={<Home/>} />
               
                <Route path='/about/' element={<Aboutus/>} />
                <Route path='/services/' element={<Services/>} />
                <Route path='/portfolios/' element={<Portfolio/>} />
               <Route path='/blogs/' element={<Blogs/>} />
               <Route path='/contactus/' element={<Contactus/>} />
               
            </Routes>
        </>
    )
}

export default Header

