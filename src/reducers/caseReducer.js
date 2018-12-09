import * as actions from '../actions/actionConstants';

export const caseReducer = (state = [], action) => {
  switch(action.type) {
    case actions.LOAD_CASES:
      return action.cases;
    default:
      return state;
  }
};