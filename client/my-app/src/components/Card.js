import React from 'react';

const Card = (props) => (
  <div className="card">
    <h3>{props.title}</h3>
    <p>Priority: {props.priority}</p>
    <p>Created by: {props.createdBy}</p>
    <p>Assigned to: {props.assignedTo}</p>
  </div>
);

export default Card;