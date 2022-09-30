import { combineReducers } from "redux";
import {
  ItemsReducer,
  UiidReducer,
  EditItemReducer,
  ItemReducer,
} from "./Reducer";

const MergingReducers = combineReducers({
  ItemsReducer,
  UiidReducer,
  EditItemReducer,
  ItemReducer,
});
export default MergingReducers;
