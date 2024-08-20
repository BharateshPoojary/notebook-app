import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import Navbar from './Navbar.jsx';
import './Home.css'
Navbar
const Home = () => {
    const notecontext = useContext(NoteContext);
    console.log(notecontext);
    const { notes, setNotes } = notecontext;
    return (
        <div>
            <div className="homecontainer">
                <h2>Add a Note</h2>
                <form action="" method="post">
                    <label htmlFor="title">Enter title for note:</label>
                    <br />
                    <input type="text" name="title" required />
                    <br />
                    <label >Enter description for note:</label>
                    <br />
                    <textarea className="desc" required></textarea>
                    <br />
                    <input className="submitbtn" type="submit" value="Add Note" />
                </form>
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return note.title;
                })}
            </div>
        </div>
    )
}

export default Home
