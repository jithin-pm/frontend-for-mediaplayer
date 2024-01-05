import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>

        <div className='footer d-flex justify-content-evenly align-item-center'>

          <div className='website' style={{ width: "400px" }}>
            <h4><i class="fa-solid fa-video text-warning me-2"></i>Media Player</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis exercitationem praesentium blanditiis fugit possimus nesciunt nam at, enim numquam cupiditate fugiat alias minus expedita reprehenderit, tempora beatae, corrupti corporis. Unde.</p>
          </div>

          {/* Links  */}

          <div className='links d-flex flex-column ms-5'>

            <h4>Links</h4>
            <Link to='/' style={{textDecoration:"none", color:"white"}}>Landing page</Link>
            <Link to='/home' style={{textDecoration:"none", color:"white"}}>Home page</Link>
            <Link to='/watch' style={{textDecoration:"none", color:"white"}}>Watch History</Link>

          </div>

          {/* Guides  */}

          <div className='links d-flex flex-column ms-5'>

            <h4>Guides</h4>
            <Link to='https://react.dev/' target='_blank' style={{textDecoration:"none", color:"white"}}>React</Link>
            <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:"none", color:"white"}}>React Bootstrap</Link>
            <Link to='https://getbootstrap.com/' target='_blank' style={{textDecoration:"none", color:"white"}}>Bootstrap</Link>

          </div>

          {/* contact */}

          <div className='contact d-flex flex-column ms-5'>
            <h4>Contact Us</h4>
            <div className='d-flex'>
              <input type="text" placeholder='Enter your email' className='form-control' />
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className=' d-flex justify-content-evenly align-item-center mt-3' style={{fontSize:"25px"}}>
              <Link to='https://www.instagram.com/' target='_blank'><i class="fa-brands fa-instagram "></i></Link>
              <Link to='https://www.facebook.com/' target='_blank'><i class="fa-brands fa-facebook ms-3"></i></Link>
              <Link to='https://twitter.com/i/flow/login' target='_blank'><i class="fa-brands fa-twitter ms-3"></i></Link>
              <Link to='https://in.linkedin.com/' target='_blank'><i class="fa-brands fa-linkedin ms-3"></i></Link>
            </div>
          </div>


        </div>

      </div>
      <p className='mt-5 text-center'>Copyright &copy; 2023 Media Player. Built with React</p>
    </>
  )
}

export default Footer