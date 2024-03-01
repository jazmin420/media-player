import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height: '300px', borderTop:'1px solid grey', paddingTop:'40px'}} className="container mt-5 w-100">
    <div className='footer-content d-flex justify-content-between'>
      <div style={{width: '400px'}} className="media">
        <h5 className='d-flex'>
          <i style={{height:'25px'}} className='fa-solid fa-music me-3'></i>Media Player
        </h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className="links d-flex flex-column">
        <h5>Links</h5>
        <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing page</Link>
        <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home page</Link>
        <Link to={'/watch'} style={{textDecoration:'none', color:'white'}}>Watch history</Link>
      </div>
      <div className="guides d-flex flex-column">
        <h5>Guides</h5>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}>React JS</a>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}>React routing</a>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}>react bootstrap</a>
      </div>
      <div className="contact">
        <h5>contact us</h5>
        <div className='d-flex'>
          <input type="text" className='form-control me-1' placeholder='Email id  please' />
          <button className='btn btn-nfo'>
            <i className='fa-solid fa-arrow-right'></i>
          </button>
        </div>
        <div className='icons d-flex jsutify-content-between mt-3'>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}>
            <i className='fa-brands fa-twitter'></i>
          </a>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}>
            <i className='fa-brands fa-facebook'></i>
          </a>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}>
            <i className='fa-brands fa-instagram'></i>
          </a>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}>
            <i className='fa-brands fa-github'></i>
          </a>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}>
            <i className='fa-solid fa-phone'></i>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer