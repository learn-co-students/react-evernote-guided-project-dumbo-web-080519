import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    noteArr: [],
    noteItem: {}


  state = {
    noteArr: []

  }

componentDidMount() {
  fetch('http://localhost:3000/api/v1/notes')
  .then(res => res.json())
  .then(noteData => this.setState({
    noteArr: noteData
  }))
}

handleNoteViewer = (note) => {
  console.log(note)
  this.setState({
    noteItem: note
  })
}

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.noteArr} handleNoteViewer={this.handleNoteViewer}/>
          <Content note={this.state.noteItem}/>
render() {
  return (
    <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.noteArr}/>
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
