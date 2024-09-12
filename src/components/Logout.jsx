import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem('auth-token');
        navigate('https://bharat-note-app.netlify.app/Signin');// 'replace' ensures no back navigation
    }, [])
    return (
        <div>

        </div>
    )
}

export default Logout
