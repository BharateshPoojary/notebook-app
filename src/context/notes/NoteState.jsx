import NoteContext from "./NoteContext";
import React, { useState } from 'react'//React is imported because you are using JSX (the HTML-like syntax) and some React functionality.

const NoteState = (props) => {//getting the props sent to it
    const objofnote = [
        {
            "_id": "66b95b8f374a592ba058b624",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "My Note",
            "description": "My note first descrption",
            "__v": 0,
            "date": "2024-08-19T16:06:26.069Z"
        },
        {
            "_id": "66b95be1e240064eb553cf93",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "My Note",
            "description": "My note first descrption",
            "__v": 0,
            "date": "2024-08-19T16:06:26.070Z"
        },
        {
            "_id": "66b95be3e240064eb553cf95",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "My Note",
            "description": "My note first descrption",
            "__v": 0,
            "date": "2024-08-19T16:06:26.071Z"
        },
        {
            "_id": "66b95c545de8049fd64e3596",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "My Note",
            "description": "My note first descrption",
            "__v": 0,
            "date": "2024-08-19T16:06:26.072Z"
        },
        {
            "_id": "66b95d5b9a5b0e2461ddf1f3",
            "user": "66b5f1c1a86b7376003f5778",
            "title": "my name is title2",
            "description": "My name is description2",
            "date": "2024-08-12T00:54:51.506Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(objofnote);


    return (
        <NoteContext.Provider value={{ notes, setNotes }}>{/**here we are sending  object of state as prop to the NoteContext so that it could be accessed by all components which are wrapped inside NoteState component   */}
            {props.children}{/**here props.children means components which are wrapped inside NoteState component are indirectly passed as prop to the NoteState Component */}
        </NoteContext.Provider>
    )
}

export default NoteState
