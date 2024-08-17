import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
const Home = () => {
    const b = useContext(NoteContext);
    return (
        <div>
            <h1>Hi {b.state.name} and {b.state.class}</h1>
            <h1>I am Signin</h1>
        </div>
    )
}

export default Home
