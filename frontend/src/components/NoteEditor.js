import React, { Component } from 'react';

class NoteEditor extends Component {


  render() {
    console.log(this.props.selectedNote.id)
    return (
      <form className="note-editor">
        <input type="text" name="title" onChange={this.props.handleEditChange} placeholder={this.props.selectedNote.title} value={this.props.title}/>
        <textarea name="body" onChange={this.props.handleEditChange} placeholder={this.props.selectedNote.body} value={this.props.body}/>
        <div className="button-row">
          <input className="button" type="submit" onClick={(evt) => this.props.handleSubmit(evt, this.props.selectedNote.id)} value="Save" />
          <button type="button" onClick={(evt) => this.props.handleCancel(evt)}>Cancel</button>
          <p>{this.props.title} </p>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
