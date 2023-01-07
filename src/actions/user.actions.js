import { api } from '../utils/api';
import { authorization, auth } from '../utils/firebase';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE
} from './types';


/**
 * Register new user
 * @param payload: { _id: string, email: string}
 * @returns
 */
export const register = (payload) => {
    let options = { url: "user" };
    options.types = [REGISTER_SUCCESS, REGISTER_FAILURE];

    return api.post(options, payload);
}

/**
 * Login user
 * @param email: string
 * @param password: string
 * @returns payload
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
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        unsubscribe();
        console.log('logged in', userAuth)
      }, console.log('logged out'));

      return { type: LOGIN_SUCCESS }
}


export const logout = () => {
    let options = { types: [LOGOUT_SUCCESS, LOGOUT_FAILURE] }
    return authorization.logout(options);
}

export const resetPassword = (email) => {
    let options = {};
    options.types = [RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE]

    return authorization.resetPassword(options, email);
}
