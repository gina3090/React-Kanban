import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        <p>Priority: {this.props.priority}</p>
        <p>Created by: {this.props.createdBy}</p>
        <p>Assigned to: {this.props.assignedTo}</p>
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    );
  }
}

export default Card;