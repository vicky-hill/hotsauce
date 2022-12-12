import { api } from '../utils/api';
import * as types from './types';

const cartItemsFromStorage = () => {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}

export const loadCart = () => {

    // If no current user, load cart from local storage    
    return {
        type: types.LOAD_CART_SUCCESS,
        payload: cartItemsFromStorage()
    }
}

export const addToCart = (item) => {
    let options = { url: 'cart' };

    options.types = [
        types.ADD_TO_CART_SUCCESS,
        types.ADD_TO_CART_FAILURE
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
        type: types.ADD_TO_CART_SUCCESS,
        payload: updatedCart
    }
}