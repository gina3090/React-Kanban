import React, { Component } from 'react';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority: '',
      status: '',
      createdBy: '',
      assignedTo: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleCreatedBy = this.handleCreatedBy.bind(this);
    this.handleAssignedTo = this.handleAssignedTo.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addCard({
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status,
      createdBy: this.state.createdBy,
      assignedTo: this.state.assignedTo
    });

    this.setState({
      title: '',
      priority: '',
      status: '',
      createdBy: '',
      assignedTo: ''
    })
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  handlePriority(event) {
    this.setState({
      priority: event.target.value
    });
  }

  handleStatus(event) {
    this.setState({
      status: event.target.value
    });
  }

  handleCreatedBy(event) {
    this.setState({
      createdBy: event.target.value
    });
  }

  handleAssignedTo(event) {
    this.setState({
      assignedTo: event.target.value
    });
  }

  render() {
    return (
      <div className="new-card-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitle} />
          <input type="text" placeholder="Priority" value={this.state.priority} onChange={this.handlePriority} />
          <input type="text" placeholder="Status" value={this.state.status} onChange={this.handleStatus} />
          <input type="text" placeholder="Created By" value={this.state.createdBy} onChange={this.handleCreatedBy} />
          <input type="text" placeholder="Assigned To" value={this.state.assignedTo} onChange={this.handleAssignedTo} />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default NewCardForm;