import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'
const App = () => {
    return (
        <div>
            {/* <NoteState>*NoteState is the component to which we are passing navbar and outlet as prop. Wrapping up this component so that it can access the  contexts state . Outlet includes/refers to  all the child components like signin/up ,about etc */}
            <Navbar />
            <Outlet />
            {/* </NoteState> */}
            <div className="homecontainer">
                <h2>Add a note</h2>
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
                <h2>Your notes</h2>

            </div>
        </div>
    )
}

export default App
