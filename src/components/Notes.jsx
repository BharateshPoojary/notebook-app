import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';
import './Note.css'
const Notes = () => {
    const notecontext = useContext(NoteContext);
    console.log(notecontext);
    const { notes, setNotes } = notecontext;
    return (
        <div className='notescontainer'>
            {notes.map((note) => {
                return (
                    <NoteItem note={note} />
                )
            })}
        </div>
    )
}

export default Notes
