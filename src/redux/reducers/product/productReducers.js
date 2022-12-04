import { ADD_TO_CART, REMOVE_FROM_CART } from "../../actionTypes/actionTypes";
import { productInitialState } from "./productInitialState";

export const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case REMOVE_FROM_CART:
            return {

            }
        default:
            return state
    }
}