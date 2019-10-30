import React, { Fragment } from 'react';
import NoteItem from "./NoteItem"

const NoteViewer = (props) => {
  return (

    <Fragment>
    {console.log(props)}
      <h2>{props.selectedNote.title}</h2>
      <p>{props.selectedNote.body}</p>
      <button onClick={(evt) => props.handleEdit(props.selectedNote)}>Edit</button>
      <button type="button" onClick={(evt) => props.deleteNote(props.selectedNote)}>Delete</button>
      
    </Fragment>
  );
}

export default NoteViewer;
