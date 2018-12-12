import * as actions from '../actions/actionConstants';

export const categoryReducer = (state = [], action) => {
  switch(action.type) {
    case actions.LOAD_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};