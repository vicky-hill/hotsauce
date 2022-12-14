import React, { useState } from 'react';
import Grid from '../../layout/Grid';
import Card from '../../elements/Card';
import AddToCartModal from '../cart/AddToCartModal';

import { connect } from 'react-redux';
import { addToCart } from '../../../actions/cart.actions';


const ProductGrid = ({ products, addToCart }) => {
    const [modal, setModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const handleAddToCart = (product) => {
        const payload = {
            productID: product._id,
            quantity: 1
        }

        addToCart(payload);
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
    addToCart: (payload) => dispatch(addToCart(payload))
});

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
