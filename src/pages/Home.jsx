import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner p-3 position-relative ">
                <img src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="shop banner"className='img-fluid rounded-3' />
                <div className="main-banner-content position-absolute p-3">
                  <h4>SUPER DESIGN</h4>
                  <h5>Handbags & purses</h5>
                  <p>From $100</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
              
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home