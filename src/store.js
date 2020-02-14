import { combineReducers } from "redux";
import todoReducer from "./reducers/todoSlice";
import selectReducer from "./reducers/selectSlice";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";

const rootReducer = combineReducers({
  todos: todoReducer,
  selectedToDoId: selectReducer
});
 const reducer = storage.reducer(rootReducer);

const engine = createEngine("my-save-key");

const storageMiddleware = storage.createMiddleware(engine, ["SELECT_TODO"]);
export const storageLoader = storage.createLoader(engine);

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()]
});
