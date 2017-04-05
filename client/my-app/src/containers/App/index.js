import React, { Component } from 'react';
import InQueue from '../../components/InQueue';
import InProgress from '../../components/InProgress';
import Done from '../../components/Done';
import NewCardForm from '../../components/NewCardForm';
import './styles.css';

import { connect } from 'react-redux';
import { addCard } from '../../actions';

import getCards from '../../lib/getCards';
import postCard from '../../lib/postCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.title = 'KANBAN';

    this.addCard = this.addCard.bind(this);
  }

  componentWillMount() {
    getCards()
      .then(data => {
        data.forEach(cards => {
          this.props.onAddCard(cards.title, cards.priority, cards.status, cards.createdBy, cards.assignedTo);
        })
      })
  }

  addCard(card) {
    postCard(card)
      .then(cards => {
        this.props.onAddCard(card.title, card.priority, card.status, card.createdBy, card.assignedTo);
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
          <InQueue cards={this.props.cards} />
        </div>
        <div className="progress">
          <div className="progress-title">
            <h2>IN PROGRESS</h2>
          </div>
          <InProgress cards={this.props.cards} />
        </div>
        <div className="done">
          <div className="done-title">
            <h2>DONE</h2>
          </div>
          <Done cards={this.props.cards} />
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
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);