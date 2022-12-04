import { createStore } from "redux";
import { productReducer } from "./reducers/product/productReducers";

export const store = createStore(productReducer)