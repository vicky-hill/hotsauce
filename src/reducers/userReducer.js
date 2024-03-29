import {
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    GET_USER_SUCCESS,
    RESET_ERROR
} from '../actions/actionTypes';

const initialState = {
    currentUser: null,
    loading: true,
    error: null
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                currentUser: payload
            }

        case GET_USER_SUCCESS:            
            return {
                ...state,
                loading: false,
                currentUser: payload
            }

        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                currentUser: null,
                error: payload.message
            }

        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            localStorage.removeItem('cart');

            return {
                ...state,
                currentUser: null,
                loading: false,
                error: null
            }


        case RESET_ERROR:
            return {
                ...state,
                error: null
            }
            
        default:
            return {
                ...state
            }
    }
}