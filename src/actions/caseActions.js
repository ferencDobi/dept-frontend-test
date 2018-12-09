import ContentApi from "../api/ContentApi";
import * as actions from './actionConstants';

const loadCases = cases => {
  return { type: actions.LOAD_CASES, cases };
};

export const fetchCases = limit => {
  return dispatch => {
    return ContentApi.fetchCases(limit).then(response => {
      dispatch(loadCases(response.data));
    }).catch(error => console.error(error));
  };
};