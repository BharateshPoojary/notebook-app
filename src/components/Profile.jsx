import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Profile.css'
const Profile = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            const handleProfile = async () => {
                const response = await fetch('http://localhost:5000/api/auth/getuser', {
                    method: 'POST',
                    headers: {
                        'auth-token': localStorage.getItem('auth-token')
                    }
                })
                const jsonprofileresponse = await response.json();
                setUsername(jsonprofileresponse.name);
                setUseremail(jsonprofileresponse.email);

            }
            handleProfile();
        } else {
            navigate('/Signin')
        }
    }, [])
    return (
        <div className='profilecontainer'>
            <h3>User Profile</h3>
            <p>User Name : {username}</p>
            <p>Email: {useremail}</p>
        </div>
    )
}

export default Profile
