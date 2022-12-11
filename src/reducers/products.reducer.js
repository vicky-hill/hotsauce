import * as types from '../actions/types';

const initialState = {
    loading: true,
    allProducts: [],
    error: null
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case types.GET_PRODUCTS_SUCCESS:  
            console.log(payload)
            return {
                ...state,
                loading: false,
                allProducts: payload
            }

        case types.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: "Could not load products"
            }

        default:     
            return {
                ...state
            }
    }
}