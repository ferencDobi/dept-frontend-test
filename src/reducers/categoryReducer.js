import * as actions from '../actions/actionConstants';

const initialState = {
  categories: [],
  selectedJob: null,
  selectedIndustry: null
};

export const categoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.LOAD_CATEGORIES:
      return Object.assign({}, state, {categories: action.categories});
    case actions.FILTER_FOR_JOB:
      return Object.assign({}, state, {selectedJob: action.job});
    case actions.FILTER_FOR_INDUSTRY:
      return Object.assign({}, state, {selectedIndustry: action.industry});
    default:
      return state;
  }
};