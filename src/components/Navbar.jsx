import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink to='/Home'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
            </nav>
        </div>
    )
}

export default Navbar
