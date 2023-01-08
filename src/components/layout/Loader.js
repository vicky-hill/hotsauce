import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getAllProducts } from '../../actions/products.actions';
import { loadCart } from '../../actions/cart.actions';
import { checkUserSession } from '../../actions/user.actions';

const Loader = ({ getAllProducts, loadCart, checkUserSession, currentUser, allProducts }) => {

    useEffect(() => {
        !allProducts.length && getAllProducts();
        !currentUser && checkUserSession();

        loadCart(currentUser);
        console.log(currentUser)
    }, [currentUser])

    return (
        <></>
    )
}


const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(getAllProducts()),
    loadCart: () => dispatch(loadCart()),
    checkUserSession: () => dispatch(checkUserSession())
  });
  
  const mapStateToProps = (state) => ({
    currentUser: state.userReducer.currentUser,
    allProducts: state.productsReducer.allProducts
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Loader);
