import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className="blog-card">
            <div className="card-image">
                <img src="https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-fluid'/>
            </div>
            <div className="blog-content">
                <p className='date'>28 JANUARY 2023</p>
                <h5 className="title">An amazing shopping</h5>
                <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque suscipit officiis libero natus at modi quae est similique dolores aliquam.</p>
                <Link className='button' to="/">Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard