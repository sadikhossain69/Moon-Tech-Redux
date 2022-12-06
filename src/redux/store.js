import { createStore } from "redux";
import { productReducer } from "./reducers/product/productReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(productReducer, composeWithDevTools())