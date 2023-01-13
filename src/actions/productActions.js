import { api } from '../utils/api';
import * as types from './actionTypes';

export const getAllProducts = () => {
    let options = { url: 'products' };

    options.types = [
        types.GET_PRODUCTS_SUCCESS,
        types.GET_PRODUCTS_FAILURE
    ];

    return api.get(options);
}