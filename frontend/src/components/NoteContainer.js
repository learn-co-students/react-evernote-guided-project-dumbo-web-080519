import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor() {
    super()
    this.state = {
      note: {},
      //move title and body to editor to make a controlled form.
      title: "",
      body: "",
      notes: [],
      search: "",
      alphabeticalNotes: []
    }
    //binding because we're not using arrow functions.

    this.handleClick = this.handleClick.bind(this)
    this.updateNote = this.updateNote.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleEditChange = this.handleEditChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)

  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/notes")
    .then(res => res.json())
    .then(resObj => {
      this.setState({
        notes: resObj
      })
    })
  }

 handleClick(note) {
   // console.log(evt)
    this.setState({
      note: note,
      editing: false
    })

  }

  // if you use arrow functions you dont need to bind it to the class.
  // examples below
  // New Note, Edit Note, Delete Note

  deleteNote = (selectedNote) => {
    console.log(selectedNote)
    let filteredNotes = this.state.notes.filter(note => {
      return (note.id !== selectedNote.id)
    })
    this.setState({
      notes: filteredNotes,
      note: {}
    })
    fetch(`http://localhost:3000/api/v1/notes/${selectedNote.id}`, {

      method: "DELETE"
    })
  }

  handleEdit = (note) => {
    this.setState({
      editing: true
    })
  }

  handleEditChange(event) {
    console.log("Clicked", event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  handleSubmit(evt, id) {
    evt.preventDefault()
    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body
      })
    })
    .then(res => res.json())
    .then(resObj => this.updateNote(resObj))

  }

  updateNote(selectedNote) {
    let notesArray = this.state.notes.map(note => {
      if (note.id === selectedNote.id) {
        note = selectedNote
      }
      return note
    })
    this.setState({
      note: selectedNote,
      notes: notesArray
    })
  }

  /* updateNote(selectedNote) {
    let notesArray = this.state.notes.map(note => {
      if (note.id === selectedNote.id) {
        // debugger
        note = selectedNote
      }
      // you need a return statement or everything is undefined this allows everything to be updated.
      return note
    })
    console.log(notesArray)
    this.setState({
      note: selectedNote,
      notes: notesArray
    })
  } */

  handleCancel(evt) {
    this.setState({
      editing: false
    })
  }

  handleNewNote = (evt) => {
    evt.preventDefault()
    let newNote = {
      title: "Title goes here",
      body: "Body goes here"
    }
    fetch("http://localhost:3000/api/v1/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newNote)
      })
      .then(res => res.json())
      .then(resObj => this.setState({
        notes: [...this.state.notes, resObj]
      }))
    }

    // Search/Sort Notes

    handleSearchChange = (evt) => {
      this.setState({
        search: evt.target.value
      })
    }

    handleSearch = () => {
      let notes = this.state.notes.filter(note => {
        return note.title.toLowerCase().includes(this.state.search.toLowerCase()) || note.body.toLowerCase().includes(this.state.search.toLowerCase())
      })
      return notes
    }

    sortByLetter = (evt) => {
      console.log("Sorting")
      let sortedNotes = this.state.notes.sort(function (a,b) {
        return (a.title.localeCompare(b.title))
        }
      )
      console.log(sortedNotes)
    }



  render() {

    return (
      <Fragment>
        <Search handleSearchChange={this.handleSearchChange}/>
        <div className='container'>
          <Sidebar notes={this.handleSearch()} sortByLetter={this.sortByLetter} handleNewNote={this.handleNewNote} handleClick={this.handleClick}/>
          <Content deleteNote={this.deleteNote} selectedNote={this.state.note} handleCancel={this.handleCancel} editing={this.state.editing} handleSubmit={this.handleSubmit} handleEditChange={this.handleEditChange} handleEdit={this.handleEdit} title={this.state.title} body={this.state.body}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
