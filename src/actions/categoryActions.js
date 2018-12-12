import ContentApi from "../api/ContentApi";
import * as actions from './actionConstants';

const loadCategories = categories => {
  return { type: actions.LOAD_CATEGORIES, categories };
};

export const fetchCategories = () => {
  return dispatch => {
    return ContentApi.fetchCategories().then(response => {
      dispatch(loadCategories(response.data));
    }).catch(error => console.error(error));
  };
};

export const selectJob = job => {
  return { type: actions.FILTER_FOR_JOB, job };
};

export const selectIndustry = industry => {
  return { type: actions.FILTER_FOR_INDUSTRY, industry };
};