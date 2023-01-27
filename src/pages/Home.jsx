import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineLocalShipping} from 'react-icons/md'
import {AiOutlineGift} from 'react-icons/ai'
import {BiSupport} from '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   '

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="shop banner"className='img-fluid rounded-3' />
                <div className="main-banner-content position-absolute p-3">
                  <h4>NEW BAGS</h4>
                  <h5>Handbags & purses</h5>
                  <p>From $100</p>
                  <Link className='button'>BUY NOW</Link>
              </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner  position-relative ">
                  <img src="https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="shop banner"className='img-fluid rounded-3' />
                  
                  <div className="small-banner-content position-absolute p-3">
                    <h4>SUPER DESIGN</h4>
                    <h5>Handbags & purses</h5>
                    <p>From $100</p>
                    
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img src="https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="shop banner"className='img-fluid rounded-3' />
                  
                  <div className="small-banner-content position-absolute p-3">
                    <h4>NEW SHOES</h4>
                    <h5>Please choose the best fit</h5>
                    <p>From $200</p>                    
                  </div>                  
                </div>
                <div className="small-banner  position-relative ">
                  <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="shop banner"className='img-fluid rounded-3' />
                  
                  <div className="small-banner-content position-absolute p-3">
                    <h4>NEW SHOES</h4>
                    <h5>Please choose the best fit</h5>
                    <p>From $200</p>                    
                  </div>                  
                </div>
                <div className="small-banner position-relative ">
                  <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11" alt="shop banner"className='img-fluid rounded-3' />
                  
                  <div className="small-banner-content position-absolute p-3">
                    <h4>NEW JACKETS</h4>
                    <h5>Please choose the best fit</h5>
                    <p>From $500</p>                    
                  </div>                  
                </div>
              </div>
              
              
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-iems-center justify-content-between">
                <div>
                  <MdOutlineLocalShipping/>
                  <h6>Free Shipping</h6>
                  <p></p>
                </div>
                <div>
                  <AiOutlineGift/>
                  <h6>Daily Suprise Offers</h6>
                  <p></p>
                </div>
                <div>

                  <h6>Support 24/7</h6>
                  <p></p>
                </div>
                <div>                  
                  <h6>Affordable Prices</h6>
                  <p></p>
                </div>
                <div>                  
                  <h6>Secure Payments</h6>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home