import { ADD_TO_CART, REMOVE_FROM_CART } from "../../actionTypes/actionTypes";
import { productInitialState } from "./productInitialState";

export const productReducer = (state = productInitialState, action) => {

    const selectedProduct = state.cart.find(product => product._id === action.payload._id)

    console.log(selectedProduct)

    switch (action.type) {
        case ADD_TO_CART:
            if(selectedProduct) {
                return state
            }
            return {
                ...state,
                cart: [...state.cart, {...action.payload, quantity: 1}]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product._id !== action.payload._id)
            }
        default:
            return state
    }
}