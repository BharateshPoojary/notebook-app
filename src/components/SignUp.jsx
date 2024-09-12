import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import noteContext from '../context/notes/NoteContext'
import './SignUp.css'
const About = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const notecontext = useContext(noteContext);
    const { alert } = notecontext;
    const handleSignup = async (e) => {
        e.preventDefault();
        if (password === cpassword) {
            const signupurl = import.meta.env.VITE_SIGNUP_URL;
            const signupresponse = await fetch(signupurl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            })
            const jsonresponse = await signupresponse.json();
            if (jsonresponse.success) {
                localStorage.setItem('auth-token', jsonresponse.authtoken);
                alert("Account created successfully", 'success');
                navigate('/');
            } else if (jsonresponse.error) {
                alert(jsonresponse.error, 'error')
            } else {
                const { errors } = jsonresponse;
                errors.forEach(error => {
                    alert(error.msg, 'error');
                });
            }
        } else {
            alert("Password mismatched", 'error');
        }
    }
    const handleSignin = () => {
        navigate('/Signin')
    }
    return (
        <div>
            <div className='container'>
                <p className='signupwelcome'>Create a new Account</p>
                <form className='signupform' onSubmit={handleSignup}>
                    <label className='signuplabel' htmlFor="name">Enter your name:</label>
                    <br />
                    <input className='signupinput' type="text" value={name} onChange={(e) => { setName(e.target.value) }} required />
                    <br />
                    <br />
                    <label className='signuplabel' htmlFor="email">Enter your email:</label>
                    <br />
                    <input className='signupinput' type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                    <br />
                    <br />
                    <label className='signuplabel' htmlFor="password">Enter password:</label>
                    <br />
                    <input className='signupinput' type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                    <br />
                    <br />
                    <label className='signuplabel' htmlFor="cpassword">confirm password:</label>
                    <br />
                    <input className='signupinput' type="password" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} required />
                    <br />

                    <input className='signupbtn' type="submit" value="SignUp" />
                    <div className='signinredirectcontainer'>
                        <p className='signin'>Already have an account?</p> <p className='signinnavigate' onClick={handleSignin}>SignIn</p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default About
