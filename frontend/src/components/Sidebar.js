import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    // console.log(this.props.notes)
    return (
      <div className='master-detail-element sidebar'>
<<<<<<< HEAD
        <NoteList notes={this.props.notes} handleNoteViewer={this.props.handleNoteViewer}/>
=======
        <NoteList notes={this.props.notes}/>
>>>>>>> 1bb79caf07f8762766859f4d3d06b356ac1c23bf
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
