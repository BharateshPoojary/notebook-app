import React from 'react'
import './Note.css'
const NoteItem = (props) => {
    const { note } = props;
    return (
        <div class='notecontainer'>
            <h2>{note.title}</h2>
            <h5>{note.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi obcaecati quia soluta aperiam earum veniam, porro debitis quam laborum autem? Porro, voluptatibus asperiores pariatur quos totam necessitatibus similique recusandae voluptate id iusto vitae quaerat.

            </h5>

        </div>
    )
}

export default NoteItem
