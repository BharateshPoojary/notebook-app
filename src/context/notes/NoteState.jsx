import NoteContext from "./NoteContext";
import React, { useState } from 'react'//React is imported because you are using JSX (the HTML-like syntax) and some React functionality.

const NoteState = (props) => {//getting the props sent to it 
    const s1 = {//It is the object of state which can accessible by all component if passed
        name: "Bharat",
        class: "BCA"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Yajna",
                "class": "BCA"
            });
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{ state, update }}>{/**here we are sending  object of state as prop to the NoteContext so that it could be accessed by all components which are wrapped inside NoteState component   */}
            {props.children}{/**here props.children means components which are wrapped inside NoteState component are indirectly passed as prop to the NoteState Component */}
        </NoteContext.Provider>
    )
}

export default NoteState
