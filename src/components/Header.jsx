import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import {IoIosGitCompare} from 'react-icons/io'
import {MdFavoriteBorder, MdOutlineLogin} from 'react-icons/md'
import {GiShoppingCart} from 'react-icons/gi'
import {BiCategory} from 'react-icons/bi'

const Header = () => {
  return (
    <>
    <header className="header-top-strip py-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                    <p className='text-white'>Free Shipping Over $100 & Free Returns</p>
                </div>
                <div className="col-6">
                    <p className='text-end text-white mb-0'>
                        Hotel line: <a className='text-white' href='tel:+91 8264954234'>+91 8264954234</a>
                    </p>
                </div>
            </div>
        </div>
    </header>
    <header className="header-upper py-3" >
        <div className="container-xxl">
            <div className="row">
                <div className="col-2">
                    <h2>
                        <Link className='text-white'>JudyShop</Link> 
                    </h2>
                </div>
                <div className="col-5">
                    <div className="input-group">
                        <input type="text" className="form-control py-2" placeholder="Search product here" aria-label="Search product here" aria-describedby="basic-addon2"/>
                        <span className="input-group-text p-3" id="basic-addon2">
                            <BsSearch className='fs-6 '/>
                        </span>
                    </div>
                </div>
                <div className="col-5">
                    <div className="header-upper-links d-flex align-items-center justify-content-between">
                        <div>
                            <Link className='d-flex align-items-center gap-10 text-white'>
                                <IoIosGitCompare className='text-white fs-3'/>
                                <p>
                                    Compare <br/> Products
                                </p>
                            </Link>
                        </div>
                        <div>
                            <Link className='d-flex align-items-center gap-10 text-white'>
                                <MdFavoriteBorder className='text-white fs-3'/>
                                <p>
                                    Favourite <br/> Wishlist
                                </p>
                            </Link>
                        </div>
                        <div>
                            <Link className='d-flex align-items-center gap-10 text-white'>
                                <MdOutlineLogin className='text-white fs-3'/>
                                <p>
                                    Log in <br/> My Account
                                </p>
                            </Link>
                        </div>
                        <div>
                            <Link className='d-flex align-items-center gap-10 text-white'>
                                <GiShoppingCart className='text-white fs-3'/>
                                <div className='d-flex flex-column gap-10'>
                                    <span className='badge bg-white text-dark'>0</span>
                                    <p className='mb-0'>$500</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <header className="header-bottom py-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="menu-bottom d-flex align-items-center gap-30">
                        <div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BiCategory className='text-white fs-4'/> 
                                    <span className='me-5 d-inline-block'>Shop Categories</span> 
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                                    <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                                    <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>  
                                </ul>
                            </div>
                        </div>
                        <div className='menu-links'>
                            <div className="d-flex align-items-center gap-15 ">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/">Our Store</NavLink>
                                <NavLink to="/">Blogs</NavLink>
                                <NavLink to="/">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header