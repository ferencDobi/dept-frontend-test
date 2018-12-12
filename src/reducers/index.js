import {combineReducers} from 'redux';
import {caseReducer as cases} from "./caseReducer";
import {categoryReducer as categories} from "./categoryReducer";

const rootReducer = combineReducers({
  cases,
  categories
});

export default rootReducer;