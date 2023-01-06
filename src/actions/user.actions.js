import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE
} from './types';

import { authorization, handleUsers } from '../utils/firebase';

/**
 * Register new user
 * @param credentials: { email: string, password: string, ...additionalData: string | number }
 * @returns 
 */
export const register = (credentials) => {
    let options = { ...credentials };
    options.types = [REGISTER_SUCCESS, REGISTER_FAIL];

    return authorization.register(options);
}

/**
 * Login user
 * @param email: string
 * @param password: string
 * @returns 
 */
export const login = (email, password) => {
    let options = { email, password };
    options.types = [LOGIN_SUCCESS, LOGIN_FAILURE];

    return authorization.login(options);
};

/**
 * Check user session
 * @returns
 */
export const checkUserSession = () => {
    let options = { types: [LOGIN_SUCCESS, LOGIN_FAILURE] }
    
    return authorization.checkUserSession(options);
}


export const logout = () => {
    let options = { types: [LOGOUT_SUCCESS, LOGOUT_FAILURE] }
    return authorization.logout(options);
}

export const updateUser = (payload) => {
    let options = {};
    options.types = [UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE]

    return handleUsers.updateUser(options, payload)
}

export const resetPassword = (email) => {
    let options = {};
    options.types = [RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE]

    return authorization.resetPassword(options, email);
}
