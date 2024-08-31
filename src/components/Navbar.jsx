import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext'

import './Navbar.css'
const Navbar = () => {
    const navigate = useNavigate;
    const noteContext = useContext(NoteContext);
    const { alert } = noteContext;
    const [nav, setNav] = useState(false);
    // const a = useContext(NoteContext);//useContext is a function for using the Context API here we are sending NoteContext which is an object of the createContext() as parameter to  this function
    // useEffect(() => {
    //     a.update();//We are updating a particular state by accessing the update function using useContext hook
    // }, []);

    const location = useLocation();//Returns the current location object, which represents the current URL in web browsers.
    // useEffect(() => {
    //     console.log(location.pathname);
    // }, [location])
    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        navigate('/Signin');
        nav ? setNav(false) : setNav(true);
        if (nav) {
            setNav(false);
        }

    }
    const handleUser = () => {
        if (!localStorage.getItem('auth-token')) {
            alert('Please login to our platform', 'info')
        }
        if (nav) {
            setNav(false);
        }

    }
    const handleNav = () => {
        nav ? setNav(false) : setNav(true);

    }
    return (
        <>
            <div className='container'>
                <nav>
                    {/* <h2>hi {a.state.name} and {a.state.class}</h2>* 'a'  holds the context value which is sent in our case it is state object it can be accessed */}
                    <h3>Bharat Note </h3>
                    <div className={nav ? 'navitems' : 'hidenavitem'}>
                        <NavLink className={` ${location.pathname === "/" ? 'onnavlinkclick' : 'navlinks'}`} onClick={handleUser} to='/'>Home</NavLink>
                        {localStorage.getItem('auth-token') ?
                            <>
                                <NavLink className='navlinks' onClick={handleLogout}>Logout</NavLink>
                                <NavLink onClick={() => { if (nav) { setNav(false) } }} className={` ${location.pathname === "/Profile" ? 'onnavlinkclick' : 'navlinks'}`} to='/Profile'><i className="ri-profile-line" ></i>Profile</NavLink>
                            </>
                            : <><NavLink onClick={() => { if (nav) { setNav(false) } }} className={` ${location.pathname === "/Signup" ? 'onnavlinkclick' : 'navlinks'}`} to='/Signup'>Signup</NavLink>
                                <NavLink onClick={() => { if (nav) { setNav(false) } }} className={` ${location.pathname === "/Signin" ? 'onnavlinkclick' : 'navlinks'}`} to='/Signin'>Signin</NavLink></>
                        }
                        <NavLink onClick={() => { if (nav) { setNav(false) } }} className={` ${location.pathname === "/About" ? 'onnavlinkclick' : 'navlinks'}`} to='/About'>About</NavLink>
                    </div>
                    <i onClick={handleNav} className="ri-menu-3-fill"></i>

                </nav>
            </div>
            <div className={nav ? 'responsive-nav' : 'hideslider'}></div>

        </>
    )
}

export default Navbar
