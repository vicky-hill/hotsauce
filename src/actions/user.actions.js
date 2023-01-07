import { api } from '../utils/api';
import { authorization, auth } from '../utils/firebase';

import {
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    RESET_ERROR
} from './types';


/**
 * Register new user
 * @param payload: { _id: string, email: string}
 */
export const register = (payload) => {
    let options = { url: "user" };
    options.types = [REGISTER_SUCCESS, REGISTER_FAILURE];

    return api.post(options, payload);
}

/**
 * Check user session and get current user
 */
export const checkUserSession = () => {
    let options = { url: "user" };
    options.types = [GET_USER_SUCCESS, GET_USER_FAILURE];

    const unsubscribe = auth.onAuthStateChanged(() => {
        unsubscribe();
    });

    return api.get(options)
}

/**
 * Logout current user
 */
export const logout = () => {
    auth.signOut();
    return { type: LOGOUT_SUCCESS }
}

export const resetPassword = (email) => {
    let options = {};
    options.types = [RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE]

    return authorization.resetPassword(options, email);
}

export const resetError = () => {
    return { type: RESET_ERROR }
}
