import React from 'react';
import Card from '../elements/Card';
import Heading from '../elements/Heading';

import bottle1 from '../../assets/bottle1.png';
import bottle2 from '../../assets/bottle2.png';
import bottle3 from '../../assets/bottle3.png';
import bottle4 from '../../assets/bottle4.png';

const BestSellers = ({ }) => {

    const products = [
        {
            type: 'product',
            image: bottle1,
            price: "$17.95",
            productName: "Chilli Sauce Exotic",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: bottle2,
            price: "$17.95",
            productName: "Chilli Sauce Exotic",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: bottle3,
            price: "$17.95",
            productName: "Chilli Sauce Exotic",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: bottle4,
            price: "$17.95",
            productName: "Chilli Sauce Exotic",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ]

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
                        />
                    ))
                }
            </div>
        </>

    )
}

export default BestSellers;
