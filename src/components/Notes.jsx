import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';
import './Note.css'
import { Navigate, useNavigate } from 'react-router-dom';
const Notes = () => {
    const navigate = useNavigate();
    const notecontext = useContext(NoteContext);
    const { notes, getNotes } = notecontext;//Accessing the notes array from NoteContext.jsx
    useEffect(() => {
        if (localStorage.getItem('auth-token')) {

            getNotes();
        } else {
            navigate('/');
        }
    }, [])
    return (
        <div>
            {
                notes.length === 0 ? (<div className='nonotemessage'><h2 style={{ fontSize: '3vw' }}>No notes available</h2></div>) :
                    (<div className='notescontainer'>
                        {notes.map((note) => {//Iterating through each note and sending the note to NoteItem.jsx component 
                            return (
                                <NoteItem key={note._id} note={note} />
                                // key={note._id} it is required as every child must have a unique key prop
                            )
                        })}
                    </div>)
            }
        </div>

    )
}

export default Notes
