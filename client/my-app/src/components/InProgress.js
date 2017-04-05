import React, { Component } from 'react';
import Card from './Card';

class InProgress extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="progress-cards">
        {
          this.props.cards
          .filter((card) =>
            card.status === 'In Progress'
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

export default InProgress;