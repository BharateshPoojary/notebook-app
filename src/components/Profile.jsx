import React, { useEffect, useState } from 'react'
import './Profile.css'
const Profile = () => {
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    useEffect(() => {
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
