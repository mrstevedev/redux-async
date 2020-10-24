import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Import the reducers
import allReducers from "./reducers";

// Initialize store and pass in reducers & Redux Devtool
export default createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
