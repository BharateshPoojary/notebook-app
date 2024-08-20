import NoteContext from "./NoteContext";
import React, { useState } from 'react'//React is imported because you are using JSX (the HTML-like syntax) and some React functionality.

const NoteState = (props) => {//getting the props sent to it
    const objofnote = [
        {
            "_id": "9",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "My Note",
            "description": "My note first descrption",
            "__v": 0,
            "date": "2024-08-19T16:06:26.069Z"
        },
        {
            "_id": "8",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "My Note",
            "description": "My note first descrption",
            "__v": 0,
            "date": "2024-08-19T16:06:26.070Z"
        },
        {
            "_id": "7",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "My Note",
            "description": "My note first descrption",
            "__v": 0,
            "date": "2024-08-19T16:06:26.071Z"
        },
        {
            "_id": "6",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "My Note",
            "description": "My note first descrption",
            "__v": 0,
            "date": "2024-08-19T16:06:26.072Z"
        },
        {
            "_id": "5",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "my name is title2",
            "description": "My name is description2",
            "date": "2024-08-12T00:54:51.506Z",
            "__v": 0
        },
        {
            "_id": "4",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "My Note",
            "description": "My note first descrption",
            "__v": 0,
            "date": "2024-08-19T16:06:26.071Z"
        },
        {
            "_id": "3",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "My Note",
            "description": "My note first descrption",
            "__v": 0,
            "date": "2024-08-19T16:06:26.072Z"
        },
        {
            "_id": "1",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "my name is title2",
            "description": "My name is description2",
            "date": "2024-08-12T00:54:51.506Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(objofnote);
    //Adding a note 
    const addNote = (title, description) => {//addNote() function for adding the note
        //TODO API CALL
        const note = {
            "_id": "JBDJBSKFB",
            "user": "66b5f1c1a86b7376003f56578",
            "title": title,
            "description": description,
            "date": "2024-08-12T00:54:51.506Z",
            "__v": 0
        }
        const addedNote = notes.concat(note);
        setNotes(addedNote);//Updating the state by adding the note
    }
    //Deleting a note
    const deleteNote = (noteId) => {
        //TODO API CALL
        console.log(noteId);
        const afterDeletenote = notes.filter((note) => {
            return note._id !== noteId
        })
        setNotes(afterDeletenote);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote }}>{/**here we are sending  notes array ,CRUD functions  as prop to the NoteContext so that it could be accessed by all components which are wrapped inside NoteState component   */}
            {props.children}{/**here props.children means components which are wrapped inside NoteState component are indirectly passed as prop to the NoteState Component */}
        </NoteContext.Provider>
    )
}

export default NoteState
