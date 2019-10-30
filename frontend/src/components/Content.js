import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/



class Content extends Component {
  constructor(props) {
    super(props)
  //  this.state = {
  //    selectedNote: []
  //  }

  }






// Pass props directly to next Component (line 35), no need to add it to the state
// Just pass the props into the constructor() and super()
  renderContent = () => {
    if (this.props.editing === true) {
      return <NoteEditor handleEditChange={this.props.handleEditChange} title={this.props.title} body={this.props.body} handleSubmit={this.props.handleSubmit} handleCancel={this.props.handleCancel} selectedNote={this.props.selectedNote}/>;
    } else if (this.props.editing === false && this.props.selectedNote) {
      return <NoteViewer handleEdit={this.props.handleEdit} deleteNote={this.props.deleteNote} selectedNote={this.props.selectedNote} />;
    } else {
      return <Instructions />;
    }
  }

  render() {

    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
