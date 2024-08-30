import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
const Profile = () => {
    const notecontext = useContext(NoteContext);
    const { handleProfile } = notecontext;
    useEffect(() => {
        const response = handleProfile();
        console.log(response.name);

    }, [])
    return (
        <div>
            {/* <p>User Name : {response.name}</p> */}
        </div>
    )
}

export default Profile
