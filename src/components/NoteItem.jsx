import React, { useContext, useState } from 'react'
import './Note.css'
import noteContext from '../context/notes/NoteContext';
const NoteItem = (props) => {
    const [showform, setShowform] = useState(false);
    const { note } = props;//Accessing a single note as props from Notes.jsx 
    //Next accessing title and description and printing 
    const NoteContext = useContext(noteContext);
    const { deleteNote } = NoteContext;
    const updateNote = () => {
        return (
            <h1>hie</h1>
        )
    }
    return (
        <div className='notecontainer'>
            <div className="titlecontainer">
                <h3>{note.title}</h3>
                <div className='editdelbtn'>
                    <i className="ri-delete-bin-line" onClick={() => { deleteNote(note._id) }}></i>
                    <i className="ri-edit-2-line" onClick={() => { setShowform(true) }}></i>

                </div>
                {showform && updateNote()}
            </div>
            <p>{note.description} </p>
        </div >
    )
}

export default NoteItem
