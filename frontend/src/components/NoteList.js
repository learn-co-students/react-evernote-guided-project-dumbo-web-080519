import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  function textTruncate(str) {
    if (str.length > 35) {
      return str.substring(0, 42) + "..."
    }

  }


  return (

    <ul>
    <h1> Notes </h1>
      {props.notes && props.notes.length > 0 ? props.notes.map(note => <NoteItem  note={note} textTruncate={textTruncate} handleClick={props.handleClick} key={`note-${note.id}`} className="note-list"/>) : null}

    </ul>
  );
}

export default NoteList;
