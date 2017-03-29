import React, { Component } from 'react';
import Card from './Card';

class Done extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="done-cards">
        {this.props.cards
          .filter((card) =>
            card.status === 'done'  
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

export default Done;