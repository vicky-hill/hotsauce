import { combineReducers } from 'redux';
import productsReducer from './productReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';

export default combineReducers({
    userReducer,
    productsReducer,
    cartReducer
});