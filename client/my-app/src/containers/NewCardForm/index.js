import React, { Component } from 'react';
import './styles.css';

import { connect } from 'react-redux';
import { addCard } from '../../actions';

import postCard from '../../lib/postCard';

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

    this.addCard = this.addCard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleCreatedBy = this.handleCreatedBy.bind(this);
    this.handleAssignedTo = this.handleAssignedTo.bind(this);
  }

  addCard(card) {
    postCard(card)
      .then(card => {
        this.props.onAddCard(card.title, card.priority, card.status, card.createdBy, card.assignedTo);
      })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.addCard({
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
      assignedTo: '',
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
          <input type="text" placeholder="Title" onChange={this.handleTitle} />
          <select onChange={this.handlePriority}>
            <option value="low">Priority: Low</option>
            <option value="medium">Priority: Medium</option>
            <option value="high">Priority: High</option>
          </select>
          <select onChange={this.handleStatus}>
            <option value="queue">Status: In Queue</option>
            <option value="progress">Status: In Progress</option>
            <option value="done">Status: Done</option>
          </select>
          <input type="text" placeholder="Created By" onChange={this.handleCreatedBy} />
          <input type="text" placeholder="Assigned To" onChange={this.handleAssignedTo} />
          <input type="submit" value="Add Card" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (title, priority, status, createdBy, assignedTo) => {
      dispatch(addCard(title, priority, status, createdBy, assignedTo));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardForm);