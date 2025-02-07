import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import NoteState from './context/notes/NoteState'

const App = () => {
    return (
        <div>
            <NoteState>{/*3 . NoteState is the component to which we are passing navbar and outlet as prop. Wrapping up this component so that it can access the  contexts state */}
                <Navbar />
                <Outlet />
                {/* tells react router where  to render child components  and which one to rnderinside a parent route here our parent route is App  */}
            </NoteState>
        </div>
    )
}

export default App
