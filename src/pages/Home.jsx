import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineLocalShipping, MdOutlineAttachMoney, MdPayment} from 'react-icons/md'
import {AiOutlineGift} from 'react-icons/ai'
import {BiSupport} from 'react-icons/bi';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';

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
              <div className="services d-flex align-items-center justify-content-between">
                
                <div className='d-flex align-items-center gap-15'> 
                  <MdOutlineLocalShipping className='fs-2'/>
                  <div>                  
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15'>
                  <AiOutlineGift className='fs-2'/>
                  <div>
                    <h6>Daily Suprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                
                <div className='d-flex align-items-center gap-15'>
                  <BiSupport className='fs-2'/>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15'>
                  <MdOutlineAttachMoney className='fs-2'/> 
                  <div>    
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15'>
                  <MdPayment className='fs-2'/>
                  <div>    
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap ">
                <div className='categories-item d-flex align-items-center'>
                  <div>
                    <h6>Brown Bags</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='categories-item d-flex align-items-center'>
                  <div>
                    <h6>Vintage Bag</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='categories-item d-flex align-items-center'>
                  <div>
                    <h6>High Heel Shoes</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='categories-item d-flex align-items-center'>
                  <div>
                    <h6>Comfort</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='categories-item d-flex align-items-center'>
                  <div>
                    <h6>Brown Bags</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='categories-item d-flex align-items-center'>
                  <div>
                    <h6>Vintage Bag</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='categories-item d-flex align-items-center'>
                  <div>
                    <h6>High Heel Shoes</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='categories-item d-flex align-items-center'>
                  <div>
                    <h6>Comfort</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Features Collection
              </h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src="https://images.pexels.com/photos/3951790/pexels-photo-3951790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="images" width='200px'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="images"  width='200px'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="images"  width='200px'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="https://images.pexels.com/photos/4004172/pexels-photo-4004172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="images"  width='200px'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="https://images.pexels.com/photos/6567356/pexels-photo-6567356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="images"  width='200px'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="https://images.pexels.com/photos/5704410/pexels-photo-5704410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="images"  width='200px'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="images"  width='200px'/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Our Latest Blogs
              </h3>
            </div>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home