import React, { useState } from "react";
import Header from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import EventNoteIcon from '@material-ui/icons/EventNote';

import './App.scss';

const  App =() => {

  const [addItem, setAddItem] = useState([]); // new array for input items

  const AddNotefunc = (note) => {
    //alert("Note Added");
    setAddItem((prevdata) => {
      return [...prevdata, note];  //updated array
    })
    // console.log(note);
  }

  const onDelete = (id) => {              //delete item where id didnot match
    setAddItem((olddata) =>(
      olddata.filter((currdata,indx)=>{
        return indx !== id;
      }))
    );
  }
  
  return (
    <div className="App">
      <Header />
      <CreateNote passNote={AddNotefunc} />
      <h2>Keep notes wherever you are .. <EventNoteIcon className="keep-icon" /></h2>
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        )
      })}

      <Footer />

    </div>
  );
}

export default App;
