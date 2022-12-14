import * as types from '../actions/types';

const initialState = {
    cartItems: [],
    error: null
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case types.LOAD_CART_SUCCESS: {
            return {
                ...state,
                cartItems: payload
            }
        }

        case types.ADD_TO_CART_SUCCESS:
            // if no current user, and no local storage cart, create cart
            localStorage.setItem('cart', JSON.stringify(payload));
            
            return {
                ...state,
                cartItems: payload
            }

        default:     
            return {
                ...state
            }
    }
}