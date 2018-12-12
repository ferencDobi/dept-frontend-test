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