import React, { useContext, useState } from 'react'
import './NoteItem.css'
import noteContext from '../context/notes/NoteContext';
const NoteItem = (props) => {
    const [showform, setShowform] = useState(false);
    const { note } = props;//Accessing a single note as props from Notes.jsx 
    //Next accessing title and description and printing 
    const [utitle, setUtitle] = useState(note.title);
    const [udesc, setUdesc] = useState(note.description);
    const NoteContext = useContext(noteContext);
    const { deleteNote, updateNote } = NoteContext;

    return (
        <div className='notecontainer'>
            <div className="titlecontainer">
                {showform ? <input type='text' value={utitle} onChange={(e) => { setUtitle(e.target.value) }} /> : <h3>{utitle}</h3>}
                {showform || <div className='editdelbtn'>
                    <i className="ri-delete-bin-line" onClick={() => { deleteNote(note._id) }}></i>
                    <i className="ri-edit-2-line" onClick={() => { setShowform(true) }}></i>
                </div>}
            </div>
            {showform ? <textarea className='etextarea' type='text' value={udesc} onChange={(e) => { setUdesc(e.target.value) }} /> : <p>{udesc} </p>
            }
            {showform &&
                <div className="btncontainer">
                    <button onClick={() => { updateNote(note._id, utitle, udesc); setShowform(false) }}>Update</button>
                    <button onClick={() => { setShowform(false) }} >Cancel</button>
                </div>
            }
        </div >
    )
}

export default NoteItem
