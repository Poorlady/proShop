import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { productListReducer } from "./redux/reducers/productReducers";

const middleware = [thunk];
const initialState = {};
const rootReducer = combineReducers({ productList: productListReducer });

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
