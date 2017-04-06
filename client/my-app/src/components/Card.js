import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(event) {
    event.preventDefault();

    this.props.editCard({
      id: this.props.id,
      title: this.props.title,
      priority: this.props.priority,
      status: this.props.status,
      createdBy: this.props.createdBy,
      assignedTo: this.props.assignedTo
    });
  }

  handleDelete(event) {
    event.preventDefault();

    this.props.removeCard({
      id: this.props.id
    });
  }

  render() {
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        <p>Priority: {this.props.priority}</p>
        <p>Created by: {this.props.createdBy}</p>
        <p>Assigned to: {this.props.assignedTo}</p>
        <div className="edit-button">
          <button onClick={this.handleEdit}>Edit</button>
        </div>
        <div className="delete-button">
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Card;