import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CHECK_USER_SESSION,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
    GET_USER_SUCCESS
} from '../actions/types';

const initialState = {
    currentUser: null,
    loading: true,
    error: null
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: payload
            }

        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            
            return {
                ...state,
                currentUser: null,
                loading: false,
                error: null
            }

        default:
            return {
                ...state
            }
    }
}