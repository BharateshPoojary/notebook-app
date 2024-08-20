import React, { useContext } from 'react'
import './Note.css'
import noteContext from '../context/notes/NoteContext';
const NoteItem = (props) => {
    const { note } = props;//Accessing a single note as props from Notes.jsx 
    //Next accessing title and description and printing 
    const NoteContext = useContext(noteContext);
    const { deleteNote } = NoteContext;
    return (
        <div className='notecontainer'>
            <div className="titlecontainer">
                <h3>{note.title}</h3>
                <div className='editdelbtn'>
                    <i className="ri-delete-bin-line" onClick={() => { deleteNote(note._id) }}></i>
                    <i className="ri-edit-2-line"></i>
                </div>
            </div>
            <p>{note.description} </p>
        </div>
    )
}

export default NoteItem
