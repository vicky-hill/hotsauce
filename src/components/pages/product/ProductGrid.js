import React, { useState } from 'react';
import Grid from '../../layout/Grid';
import Card from '../../elements/Card';
import AddToCartModal from '../cart/AddToCartModal';

import { connect } from 'react-redux';
import { addToCart } from '../../../actions/cartActions';


const ProductGrid = ({ products, addToCart, currentUser }) => {
    const [modal, setModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const handleAddToCart = (product) => {
        const payload = {
            productID: product._id,
            quantity: 1
        }

        addToCart([payload], currentUser);
        setSelectedProduct(product);
        setModal(true);
    }


    return (
        <>
            <Grid>
                {
                    products.map((product, i) => (
                        <Card
                            key={i}
                            type="product"
                            image={product.image}
                            price={product.price}
                            text={product.shortDesc}
                            productName={product.name}
                            onClick={() => handleAddToCart(product)}
                        />
                    ))
                }
            </Grid>

            <AddToCartModal modal={modal} setModal={setModal} product={selectedProduct} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (payload, currentUser) => dispatch(addToCart(payload, currentUser))
});

const mapStateToProps = (state) => ({
    currentUser: state.userReducer.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
