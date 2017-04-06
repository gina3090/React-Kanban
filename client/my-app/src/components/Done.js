import React, { Component } from 'react';
import Card from './Card';

class Done extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="done-cards">
        {
          this.props.cards
          .filter((card) =>
            card.status === 'Done'  
          )
          .map((card) => {
            return (
              <Card
                id={card.id}
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

export default Done;