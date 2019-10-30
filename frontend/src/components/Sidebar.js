import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {






  render() {
    return (
      <div className='master-detail-element sidebar'>
        <button onClick={(evt) => this.props.sortByLetter(evt)} >Sort A-Z</button>
        <NoteList handleClick={this.props.handleClick} notes={this.props.notes} />
        <p></p>
        <button onClick={(evt) => this.props.handleNewNote(evt)}>New</button>
      </div>
    );
  }
}

export default Sidebar;
