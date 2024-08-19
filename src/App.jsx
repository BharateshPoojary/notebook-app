import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'
import NoteState from './context/notes/NoteState'
import noteContext from './context/notes/NoteContext'
import { useContext } from 'react'
const App = () => {
    const notes = useContext(noteContext);
    return (
        <div>
            <NoteState>{/*NoteState is the component to which we are passing navbar and outlet as prop. Wrapping up this component so that it can access the  contexts state . Outlet includes/refers to  all the child components like signin/up ,about etc */}
                <Navbar />
                <Outlet />
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
            </NoteState>
        </div>
    )
}

export default App
