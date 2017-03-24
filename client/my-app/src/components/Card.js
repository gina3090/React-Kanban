import React from 'react';

const Card = (props) => (
  <div className="Card">
    <h3>{props.title}</h3>
    <p>{props.priority}</p>
    <p>{props.createdBy}</p>
    <p>{props.assignedTo}</p>
  </div>
);

export default Card;