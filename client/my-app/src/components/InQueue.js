import React, { Component } from 'react';
import Card from './Card';

class InQueue extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="queue-cards">
        {
          this.props.cards
          .filter((card) =>
            card.status === 'In Queue'
          )
          .map((card) => {
            return (
              <Card
                title={card.title}
                priority={card.priority}
                createdBy={card.createdBy}
                assignedTo={card.assignedTo}
              />
            );
          })
        }
      </div>
    );
  }
}

export default InQueue;