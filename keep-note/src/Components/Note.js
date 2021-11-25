import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import "../Scss/Note.scss";
const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <div className="note-container">
            <div className="note">
                <h4>{props.title}</h4>
                <p>{props.content}</p>
                <div className="note-icons">
                    <DeleteIcon className="icon" onClick={deleteNote} />
                    <ImageIcon className="icon" />
                </div>

            </div>
        </div>
    )
}

export default Note;
