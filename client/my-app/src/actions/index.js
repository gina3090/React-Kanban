export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export function addCard(title, priority, status, createdBy, assignedTo) {
  return {
    type: ADD_CARD,
    title,
    priority,
    status,
    createdBy,
    assignedTo
  };
}

export function editCard(id, title, priority, status, createdBy, assignedTo) {
  return {
    type: EDIT_CARD,
    id,
    title,
    priority,
    status,
    createdBy,
    assignedTo
  };
}

export function removeCard(id) {
  return {
    type: REMOVE_CARD,
    id
  };
}