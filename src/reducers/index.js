import {combineReducers} from 'redux';
import {caseReducer as cases} from "./caseReducer";
import {categoryReducer as selection} from "./categoryReducer";

const rootReducer = combineReducers({
  cases,
  selection
});

export default rootReducer;