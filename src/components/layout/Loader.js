import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getAllProducts } from '../../actions/products.actions';

const Loader = ({ getAllProducts }) => {

    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <></>
    )
}


const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(getAllProducts())
  });
  
  const mapStateToProps = (state) => ({

  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Loader);
