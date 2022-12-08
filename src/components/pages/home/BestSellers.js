import React, { useState } from 'react';
import Card from '../../elements/Card';
import Heading from '../../elements/Heading';
import AddToCartModal from '../cart/AddToCartModal';

import bottle1 from '../../../assets/bottle1.png';
import bottle2 from '../../../assets/bottle2.png';
import bottle3 from '../../../assets/bottle3.png';
import bottle4 from '../../../assets/bottle4.png';

import set1 from '../../../assets/set1.png';
import set2 from '../../../assets/set2.png';
import set3 from '../../../assets/set3.png';
import set4 from '../../../assets/set4.png';

const BestSellers = ({ }) => {
    const [modal, setModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            type: 'product',
            image: set2,
            price: "$17.95",
            name: "Sriracha Sampler",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: set4,
            price: "$12.95",
            name: "Chilli Sauce Exotic",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: set1,
            price: "$17.95",
            name: "Hot Sauce Heaven",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: set3,
            price: "$5.95",
            name: "The Scorchers",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ]

    const openModal = (product) => {
        setModal(true);
        setSelectedProduct(product);
    }

    return (
        <>
            <Heading className="my-5 mt-5" accent="Our " text="bestsellers" />
            <div className="recipes mt-4">
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
            </div>
            
            <AddToCartModal modal={modal} setModal={setModal} product={selectedProduct} />
        </>

    )
}

export default BestSellers;
