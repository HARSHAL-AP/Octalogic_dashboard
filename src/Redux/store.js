import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as authreducer } from "./Authreducer/reducer";
import { reducer as coursereducer } from "./Coursereducer/reducer";

const rootReducer = combineReducers({
  authreducer,
  coursereducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export { store };
