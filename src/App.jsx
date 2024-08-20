import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import NoteState from './context/notes/NoteState'

const App = () => {
    // const notecontext = useContext(NoteContext);
    // console.log(notecontext);
    // const { notes, setNotes } = notecontext;
    return (
        <div>
            <NoteState>{/*NoteState is the component to which we are passing navbar and outlet as prop. Wrapping up this component so that it can access the  contexts state . Outlet includes/refers to  all the child components like signin/up ,about etc */}
                <Navbar />
                <Outlet />
            </NoteState>
        </div>
    )
}

export default App
