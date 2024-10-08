import React, { useContext, useState } from 'react'
import './Home.css'
import Notes from './Notes.jsx';
import noteContext from '../context/notes/NoteContext.jsx';

const Home = () => {
    const NoteContext = useContext(noteContext);//Using the context for accessing CRUD FUNCTION
    const [note, setNote] = useState({ title: "", description: "" });//using the state to manage notes initially it will be empty
    const { addNote } = NoteContext;//accessing the addnote function from NoteContext
    const handleChange = (e) => {//e object includes the specific information related to input and textarea tag
        setNote({ ...note, [e.target.name]: e.target.value });
        //(NOT USED HERE)The spread operator ... is used to create a copy of the current note state. This ensures that all existing properties in the note object are preserved.
        // ([e.target.name]): The square brackets [] allow you to dynamically define the property name based on the value of e.target.name. This corresponds to the name attribute of the input element that triggered the handleChange event
        // ([e.target.name]: e.target.value): This part updates the specific property of the note object with the new value from the input field. If e.target.name is "title", it updates note.title with the value e.target.value. If e.target.name is "description", it updates note.description.
    }
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description);/*Sending the new note to addnote function where it will be added to the  notes array*/
        setNote({ title: "", description: "" });
    }
    return (
        <div>
            <div className="homecontainer">
                <h2 className='addnote'>Add a Note</h2>
                <form>
                    <label className='notelabel' htmlFor="title">Enter title for note:</label>
                    <br />
                    <input className='noteinput' style={{ border: '1px solid black' }} type="text" name="title" value={note.title} onChange={handleChange} required />
                    <br />
                    <label className='notelabel'>Enter description for note:</label>
                    <br />
                    <textarea className="desc" name='description' value={note.description} onChange={handleChange} required></textarea>
                    <br />
                    <input className="submitbtn" type="submit" value="Add Note" onClick={handleClick} />
                </form>
                <h2>Your Notes</h2>
                <Notes />
            </div>
        </div>
    )
}

export default Home
