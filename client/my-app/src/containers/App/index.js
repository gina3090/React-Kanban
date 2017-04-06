import React, { Component } from 'react';
import InQueue from '../../components/InQueue';
import InProgress from '../../components/InProgress';
import Done from '../../components/Done';
import NewCardForm from '../../components/NewCardForm';
import './styles.css';

import { connect } from 'react-redux';
import { addCard, editCard, removeCard } from '../../actions';

import getCards from '../../lib/getCards';
import postCard from '../../lib/postCard';
import putCard from '../../lib/putCard';
import deleteCard from '../../lib/deleteCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.title = 'KANBAN';

    this.addCard = this.addCard.bind(this);
    this.editCard = this.editCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  componentWillMount() {
    getCards()
      .then(data => {
        data.forEach(cards => {
          this.props.onAddCard(cards.title, cards.priority, cards.status, cards.createdBy, cards.assignedTo);
        });
      });
  }

  addCard(card) {
    postCard(card)
      .then(cards => {
        this.props.onAddCard(card.title, card.priority, card.status, card.createdBy, card.assignedTo);
      });
  }

  editCard(card) {
    putCard(card)
      .then(cards => {
        this.props.onEditCard(card.id, card.title, card.priority, card.status, card.createdBy, card.assignedTo);
      });
  }

  removeCard(card) {
    deleteCard(card)
      .then(cards => {
        this.props.onRemoveCard(card.id);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1>{this.title}</h1>
        </div>
        <div className="queue">
          <div className="queue-title">
            <h2>IN QUEUE</h2>
          </div>
          <InQueue cards={this.props.cards} editCard={this.editCard} removeCard={this.removeCard} />
        </div>
        <div className="progress">
          <div className="progress-title">
            <h2>IN PROGRESS</h2>
          </div>
          <InProgress cards={this.props.cards} editCard={this.editCard} removeCard={this.removeCard} />
        </div>
        <div className="done">
          <div className="done-title">
            <h2>DONE</h2>
          </div>
          <Done cards={this.props.cards} editCard={this.editCard} removeCard={this.removeCard} />
        </div>
        <NewCardForm addCard={this.addCard} />
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
    },
    onEditCard: (id, title, priority, status, createdBy, assignedTo) => {
      dispatch(editCard(id, title, priority, status, createdBy, assignedTo));
    },
    onRemoveCard: (id) => {
      dispatch(removeCard(id));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);