import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='container'>
            <nav>
                <h3>Bharat Note </h3>
                <div className='navitems'>
                    <NavLink className='navlinks' to='/Signin'>Signin</NavLink>
                    <NavLink className='navlinks' to='/Signup'>Signup</NavLink>
                    <NavLink className='navlinks' to='/About'>About</NavLink>
                    <i className="ri-menu-3-fill"></i>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
