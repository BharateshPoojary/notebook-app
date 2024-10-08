import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import noteContext from '../context/notes/NoteContext'
import './SignIn.css'
const Home = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const notecontext = useContext(noteContext);
    const { alert } = notecontext;
    const handleLogin = async (e) => {
        e.preventDefault();
        const signinurl = import.meta.env.VITE_SIGNIN_URL;
        const loginresponse = await fetch(signinurl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const jsonresponse = await loginresponse.json();

        if (jsonresponse.success) {
            localStorage.setItem('auth-token', jsonresponse.auth_token);
            navigate('/');
            alert("Logged in  successfully", 'success');
        } else {
            alert(jsonresponse.error, 'error')
        }

    }
    const handleSignup = () => {
        navigate('/Signup')
    }
    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            navigate('/');
        }
    }, [])

    return (
        <div className='signincontainer'>
            <p className='signinwelcome'>Welcome back - Login to your Account</p>
            <form className='signinform' onSubmit={handleLogin}>
                <label className='loginlabel' htmlFor="email">Enter your email:</label>
                <br />
                <input className='logininput' type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                <br />
                <br />
                <label className='loginlabel' htmlFor="password">Enter password:</label>
                <br />
                <input className='logininput' type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                <br />

                <input className='signinbtn' type="submit" value="SignIn" />

            </form>
            <div className='signupcontainer'>
                <p className='signup'>Don't have an account?</p> <p className='signupnavigate' onClick={handleSignup}>SignUp</p>
            </div>
        </div>
    )
}

export default Home
