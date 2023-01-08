import {
    LOAD_CART_SUCCESS,
    CLEAR_CART_SUCCESS,
    ADD_TO_CART_SUCCESS
} from '../actions/types';

const initialState = {
    cartItems: [],
    error: null
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case LOAD_CART_SUCCESS: {
            return {
                ...state,
                cartItems: payload.items
            }
        }

        case ADD_TO_CART_SUCCESS:
            // if no current user, and no local storage cart, create cart
            localStorage.setItem('cart', JSON.stringify(payload));
            
            return {
                ...state,
                cartItems: payload
            }

        case CLEAR_CART_SUCCESS:
            return {
                ...state,
                cartItems: [],
                error: null
            }

        default:     
            return {
                ...state
            }
    }
}