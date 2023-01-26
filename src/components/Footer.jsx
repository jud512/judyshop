import React from 'react'
import {GiLetterBomb} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-5 align-items-center">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <GiLetterBomb className='text-white fs-2'/>
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact us</h4>
              <div>
                <address className='text-white fs-6'>
                  Hno : 277 Near Vill chopal,
                <br/> Sonipar, Haryana <br/>
                PinCode: 131103
                </address>
                <a href='tel:+91 8265954234' className='mt-3 d-block mb-1 text-white'>
                  +91 8265954234
                </a>
                <a href='mailto:judyshop@gmail.com' className='mt-2 d-block mb-0 text-white'>
                  judyshop@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="">
                    <BsLinkedin className='text-white fs-5'/>
                  </a>
                  <a href="">
                    <BsInstagram className='text-white fs-5'/>
                  </a>
                  <a href="">
                    <BsGithub className='text-white fs-5'/>
                  </a>
                  <a href="">
                    <BsYoutube className='text-white fs-5'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Acount</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
                <Link className='text-white py-2 mb-1'>Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()}  Powered by JudyShop</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer