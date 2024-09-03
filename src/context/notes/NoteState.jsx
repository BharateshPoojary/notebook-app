import NoteContext from "./NoteContext";
import React, { useState } from 'react'//React is imported because you are using JSX (the HTML-like syntax) and some React functionality.
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NoteState.css'
const NoteState = (props) => {//getting the props sent to it


    const arrofnotes = [];
    const [notes, setNotes] = useState(arrofnotes);
    const getnotesurl = import.meta.env.VITE_GET_NOTES_URL;
    const getNotes = async () => {
        //GET Notes From database
        const getresponse = await fetch(getnotesurl, {
            method: 'GET',
            headers: {
                'auth-token': localStorage.getItem('auth-token')
            }
        })
        const jsonresponse = await getresponse.json();

        if (jsonresponse.error) {
            alert(jsonresponse.error, 'error')
        } else {
            setNotes(jsonresponse);
        }

    }
    // Adding a note 
    const addnotesurl = import.meta.env.VITE_ADD_NOTES_URL;
    const addNote = async (title, description) => {//addNote() function for adding the note

        const addresponse = await fetch(addnotesurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token'),
            },
            body: JSON.stringify({ title, description })
        })
        const jsonresponse = await addresponse.json();

        if (jsonresponse.errors) {
            const { errors } = jsonresponse;
            errors.forEach(error => {
                alert(error.msg, 'error');
            });
        } else if (jsonresponse.error) {
            alert(jsonresponse.error, 'error')
        }
        else {
            const addedNote = notes.concat(jsonresponse);
            setNotes(addedNote);//Updating the state by adding the note
            alert("Note added successfully", 'success')
        }
    }
    // Updating a note 
    const updatenotesurl = import.meta.env.VITE_UPDATE_NOTES_URL;
    const updateNote = async (noteId, title, description) => {
        const updateresponse = await fetch(updatenotesurl + noteId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token'),

            },
            body: JSON.stringify({ title, description })
        })
        const jsonresponse = await updateresponse.json();

        if (jsonresponse.error) {
            alert(jsonresponse.error, 'error')
        } else {
            alert("Note updated successfully", 'success')
        }
    }
    //Deleting a note
    const deletenotesurl = import.meta.env.VITE_DELETE_NOTES_URL;
    const deleteNote = async (noteId) => {
        const deleteresponse = await fetch(deletenotesurl + noteId, {
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('auth-token')
            }
        });
        const jsonresponse = await deleteresponse.json();

        const afterDeletenotearr = notes.filter((note) => {
            return note._id !== noteId
        })
        setNotes(afterDeletenotearr);
        if (jsonresponse.success) {
            alert("Note deleted successfully", 'success')
        } else {
            alert(jsonresponse.error, 'error')
        }

    }

    //Notification
    const alert = (message, type) => {
        toast(message, { type: type });
    }
    return (
        <>
            <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes, updateNote, alert }}>{/**here we are sending  notes array ,CRUD functions  as prop to the NoteContext so that it could be accessed by all components which are wrapped inside NoteState component   */}
                {props.children}{/**here props.children means components which are wrapped inside NoteState component are indirectly passed as prop to the NoteState Component */}
            </NoteContext.Provider>
            < ToastContainer bodyClassName='toastBody' position="top-center" theme="dark" />
        </>
    )
}

export default NoteState
