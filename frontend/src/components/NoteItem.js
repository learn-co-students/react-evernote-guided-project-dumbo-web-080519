import React from 'react';

const NoteItem = (props) => (
<<<<<<< HEAD
  <li onClick={() =>
  props.handleNoteViewer(props.note)}>

    <h2>{ props.note.title}</h2>
    <p>{ props.note.body}</p>
    
=======
  <li>
    <h2>{ props.note.title}</h2>
    <p>{ props.note.body}</p>
>>>>>>> 1bb79caf07f8762766859f4d3d06b356ac1c23bf
  </li>
);

export default NoteItem;
