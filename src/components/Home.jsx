import React from 'react'
import './Home.css'
import Notes from './Notes.jsx';
const Home = () => {

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
                <Notes />
            </div>
        </div>
    )
}

export default Home
