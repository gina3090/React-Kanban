import { ADD_CARD, EDIT_CARD, REMOVE_CARD } from '../actions';

const initialState = {
  cards: []
};

function cards(state = initialState, action) {
  switch(action.type) {
    case ADD_CARD:
      return Object.assign({}, state, {
        cards: [
          ...state.cards,
          {
            title: action.title,
            priority: action.priority,
            status: action.status,
            createdBy: action.createdBy,
            assignedTo: action.assignedTo
          }
        ]
      });
    case EDIT_CARD:
      let edited = state.cards.map(card => {
        if(card.id === action.id) {
          card.title = action.title;
          card.priority = action.priority;
          card.status = action.status;
          card.createdBy = action.createdBy;
          card.assignedTo = action.assignedTo;
          return card;
        } else {
          return card;
        }
      });
      return Object.assign({}, state, {
        cards: [
          ...edited
        ]
      });
    case REMOVE_CARD:
      let removed = state.cards.map(card => {
        return card.id === action.id;
      });
      return Object.assign({}, state, {
        cards: [
          ...removed
        ]
      });
    default:
      return state;
  }
}

export default cards;