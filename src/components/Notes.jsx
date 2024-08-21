import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';
import './Note.css'
const Notes = () => {
    const notecontext = useContext(NoteContext);
    const { notes, getNotes } = notecontext;//Accessing the notes array from NoteContext.jsx
    useEffect(() => {
        getNotes();
    }, [])
    return (
        <div className='notescontainer'>
            {notes.map((note) => {//Iterating through each note and sending the note to NoteItem.jsx component 
                return (
                    <NoteItem key={note._id} note={note} />// key={note._id} it is required as every child must have a unique key prop
                )
            })}
        </div>
    )
}

export default Notes
