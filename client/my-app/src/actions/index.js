export const ADD_CARD = 'ADD_CARD';

export function addCard(title, priority, status, createdBy, assignedTo) {
  return {
    type: ADD_CARD,
    title: title,
    priority: priority,
    status: status,
    createdBy: createdBy,
    assignedTo: assignedTo
  };
}