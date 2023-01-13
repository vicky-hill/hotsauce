import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getAllProducts } from '../../actions/productActions';
import { loadCart, addToCart } from '../../actions/cartActions';
import { checkUserSession } from '../../actions/userActions';

const Loader = ({ getAllProducts, loadCart, checkUserSession, currentUser, allProducts, addToCart }) => {

    const localStorageCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;

    useEffect(() => {
        !allProducts.length && getAllProducts();
        !currentUser && checkUserSession();

        loadCart(currentUser);

        if(currentUser && localStorageCart) {
            addToCart(localStorageCart, currentUser);
            localStorage.removeItem('cart');
        }
    }, [currentUser])

    return (
        <></>
    )
}


const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(getAllProducts()),
    loadCart: () => dispatch(loadCart()),
    checkUserSession: () => dispatch(checkUserSession()),
    addToCart: (payload, currentUser) => dispatch(addToCart(payload, currentUser))
  });
  
  const mapStateToProps = (state) => ({
    currentUser: state.userReducer.currentUser,
    allProducts: state.productsReducer.allProducts,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Loader);
