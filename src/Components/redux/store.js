import { legacy_createStore as createStore, legacy_createStore } from "redux";
import MergingReducers from "./Reducers/MergingReducers";

export const store = legacy_createStore(MergingReducers);
