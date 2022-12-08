import React, { useState } from 'react';
import Grid from '../../layout/Grid';
import Card from '../../elements/Card';
import AddToCartModal from '../cart/AddToCartModal';

const ProductGrid = ({ products }) => {
    const [modal, setModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setModal(true);
        setSelectedProduct(product);
    }


    return (
        <>
            <Grid>
                {
                    products.map((product, i) => (
                        <Card
                            key={i}
                            type={product.type}
                            image={product.image}
                            price={product.price}
                            text={product.text}
                            productName={product.name}
                            onClick={() => openModal(product)}
                        />
                    ))
                }
            </Grid>

            <AddToCartModal modal={modal} setModal={setModal} product={selectedProduct} />
        </>
    )
}

export default ProductGrid;
