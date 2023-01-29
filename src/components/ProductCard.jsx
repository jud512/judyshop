import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa'
import { BsEye } from 'react-icons/bs'
import { MdCompareArrows } from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'


const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link className='text-black'>
                <AiOutlineHeart/>
                </Link>
            </div>
            <div className="product-image">
                <img src="https://images.pexels.com/photos/157888/fashion-glasses-go-pro-female-157888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product image" className='img-fluid'/>
                <img src="https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product image" className='img-fluid'/>
            </div>
                <div className="product-details">
                    <h6 className="brand">Bag Brand</h6>
                    <h5 className="product-title">
                        This is a beautiful selection.
                    </h5>
                    <ReactStars
                        count={5}
                        value={3}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                    />
                    <p className="price">$100.00</p>
                </div>
            
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column gap-15'>
                    <Link className='text-black'>
                        <MdCompareArrows/>
                    </Link>
                    <Link className='text-black'>
                        <BsEye/>
                    </Link>
                    <Link className='text-black'>
                        <FaCartPlus/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard