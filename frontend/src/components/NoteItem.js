import React from 'react';

const NoteItem = ({note, handleClick, textTruncate}) => (
  // callback for handleClick so I can pass in the actual note.
  <li onClick={(evt) => handleClick(note)}>
    <h2>{note.title}</h2>
    <p>{textTruncate(note.body)}</p>
  </li>
);

export default NoteItem;
