import { api } from '../utils/api';
import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    LOAD_CART_SUCCESS,
    LOAD_CART_FAILURE,
    CLEAR_CART_SUCCESS
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

    let options = { url: 'cart' };
    options.types = [
        LOAD_CART_SUCCESS,
        LOAD_CART_FAILURE
    ]

    return api.get(options)
}

/**
 * Add to cart
 * @param items: [{ productID: string, quantity: number }]
 * @param currentUser: { _id: string, email: string }
 * @returns cart {}
 */
export const addToCart = (items, currentUser) => {
    let options = { url: 'cart' };

    options.types = [
        ADD_TO_CART_SUCCESS,
        ADD_TO_CART_FAILURE
    ];

    const payload = { items };

    // If no current user, add to local storage
    if (!currentUser) {        
        const item = items[0];
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

        localStorage.setItem('cart', JSON.stringify(updatedCart));

        return {
            type: ADD_TO_CART_SUCCESS,
            payload: { items: updatedCart }
        }
    }

    return api.post(options, payload);
}

/**
 * Convert ls cart to db cart
 * @param items: string | number[]
 * @returns cart {}
 */
export const convertCart = (item) => {
    let options = { url: 'cart' };

    options.types = [
        ADD_TO_CART_SUCCESS,
        ADD_TO_CART_FAILURE
    ];
}

export const clearCart = () => {
    return { type: CLEAR_CART_SUCCESS }
}