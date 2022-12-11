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
            return {
                ...state
            }

        case types.GET_PRODUCTS_FAILURE:
            return {
                ...state
            }

        default:     
            return {
                ...state
            }
    }
}