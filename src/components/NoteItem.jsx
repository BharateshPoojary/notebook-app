import React from 'react'
import './Note.css'
const NoteItem = (props) => {
    const { note } = props;
    const delNote = () => {
        return (<h1>Hi</h1>
        )
    }
    return (
        <div className='notecontainer'>
            <div className="titlecontainer">
                <h3>{note.title}</h3>
                <div className='editdelbtn'>
                    <i className="ri-delete-bin-line" onClick={delNote}></i>
                    <i className="ri-edit-2-line"></i>
                </div>
            </div>
            <p>{note.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi obcaecati quia soluta aperiam earum veniam, porro debitis quam laborum autem? Porro, voluptatibus asperiores pariatur quos totam necessitatibus similique recusandae voluptate id iusto vitae quaerat.
            </p>
        </div>
    )
}

export default NoteItem
