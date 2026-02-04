import React from 'react'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'
import './index.css';

const Home = () => {
  return (
    <>
    <div className='container'>
        <img src="../Images/banner.jpg" alt="E-Commerce Banner" className="banner-image" />
       <h1 className="text-center">Welcome to the E-Commerce Website Home Page</h1>
         <p className="text-center">Explore our products and enjoy shopping!</p>
            <div className="text-center">
                <Link to="/user" className='btn'>Go to User Dashboard</Link> 
                <Link to="/vendor" className='btn'>Go to Vendor Dashboard</Link>
                <Link to="/cart" className='btn'>Go to Cart</Link>
                <Link to="/login" className='btn'>Login</Link>
                <Link to="/signup" className='btn'>Sign Up</Link>

            </div>
        </div>
        <Footer />
    </>
    
  )
}

export default Home