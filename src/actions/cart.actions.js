import { api } from '../utils/api';
import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    LOAD_CART_SUCCESS,
    LOAD_CART_FAILURE
} from './types';

const cartItemsFromStorage = () => {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}

/**
 * Load current user cart
 * @param user: { }
 * @returns cart {}
 */
export const loadCart = () => {

    // If not logged in, load cart from local storage    
    if (cartItemsFromStorage.length) {
        return {
            type: LOAD_CART_SUCCESS,
            payload: { items: cartItemsFromStorage() }
        }
    }

    let options = { url: 'cart'};
    options.types = [
        LOAD_CART_SUCCESS,
        LOAD_CART_FAILURE
    ]

    return api.get(options)
}

export const addToCart = (item) => {
    let options = { url: 'cart' };

    options.types = [
        ADD_TO_CART_SUCCESS,
        ADD_TO_CART_FAILURE
    ];

    // return api.get(options);

    // If no current user, add to local storage
    const existingItem = cartItemsFromStorage().find(storageItem => storageItem.productID === item.productID)
    let updatedCart = [...cartItemsFromStorage()];

    if (existingItem) {
        updatedCart = updatedCart.map(storageItem => (
            storageItem.productID === existingItem.productID
                ? { ...storageItem, quantity: storageItem.quantity + 1 } : storageItem
        ))
    } else {
        updatedCart.push(item)
    }

    return {
        type: ADD_TO_CART_SUCCESS,
        payload: updatedCart
    }
}