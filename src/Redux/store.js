import { createStore, applyMiddleware, combineReducers } from "redux";

import { thunk } from "redux-thunk";
import { Users_Resducer } from "./Users_reducer";
const rootreducer = combineReducers({
  User: Users_Resducer,
});

// export const store = createStore(rootreducer, applyMiddleware(thunk));
export const store = createStore(rootreducer, applyMiddleware(thunk));
