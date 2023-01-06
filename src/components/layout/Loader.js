import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getAllProducts } from '../../actions/products.actions';
import { loadCart } from '../../actions/cart.actions';

const Loader = ({ getAllProducts, loadCart }) => {

    useEffect(() => {
        getAllProducts();
        loadCart();
    }, [])

    return (
        <></>
    )
}


const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(getAllProducts()),
    loadCart: () => dispatch(loadCart())
  });
  
  const mapStateToProps = (state) => ({

  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Loader);
