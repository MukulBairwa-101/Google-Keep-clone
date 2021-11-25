import React,{useState} from 'react'
import Button  from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import "../Scss/CreateNote.scss";
const CreateNote = (props) => {

    const [note,setNote]=useState({
        title:"",
        content:""
    });

    const InputChange =(event) =>{

      //  const value= event.target.value;
        //const name= event.target.name;

        const {name,value}=event.target;
        setNote((prevdata)=>{
            return {
                     ...prevdata,
                     [name]:value,
                }
        });

        //console.log(note)
    };

    const AddNoteEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:""
        });
    }
    return (
        <div className="container">
            <h4>Add a Note</h4>
            <form className="form-control">
                <input
                    type="text"
                    placeholder="NOTE TITLE"
                    value={note.title}
                    name="title"  
                    onChange={InputChange}
                    autoComplete="off"
                />
                <textarea
                    rows=""
                    colums=""
                    placeholder="Content"
                    value={note.content}
                    name="content"
                    onChange={InputChange}
                    autoComplete="off"


                />
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={AddNoteEvent}

                >
                    Add Note
                    <AddCircleIcon className="circleaddicon"/>
                </Button>
            </form>

        </div>
    )
}

export default CreateNote;
