import React, { useState, useContext } from 'react'
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
        // console.log(email, password);
        const loginresponse = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const jsonresponse = await loginresponse.json();
        console.log(jsonresponse);
        if (jsonresponse.success) {
            localStorage.setItem('auth-token', JSON.stringify(jsonresponse.auth_token));
            navigate('/');
        } else if (jsonresponse.error) {
            alert(jsonresponse.error, 'error')
        } else {
            const { errors } = jsonresponse;
            errors.forEach(error => {
                alert(error.msg, 'error');

            });
        }

    }

    return (
        <div className='container'>
            <form className='signinform' onSubmit={handleLogin}>
                <label className='loginlabel' htmlFor="email">Enter your email:</label>
                <br />
                <input className='logininput' type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <br />
                <br />
                <label className='loginlabel' htmlFor="password">Enter password:</label>
                <br />
                <input className='logininput' type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <br />
                <input className='signinbtn' type="submit" value="SignIn" />
            </form>
        </div>
    )
}

export default Home
