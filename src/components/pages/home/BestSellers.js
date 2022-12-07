import React from 'react';
import Card from '../../elements/Card';
import Heading from '../../elements/Heading';

import bottle1 from '../../../assets/bottle1.png';
import bottle2 from '../../../assets/bottle2.png';
import bottle3 from '../../../assets/bottle3.png';
import bottle4 from '../../../assets/bottle4.png';

import set1 from '../../../assets/set1.png';
import set2 from '../../../assets/set2.png';
import set3 from '../../../assets/set3.png';
import set4 from '../../../assets/set4.png';



const BestSellers = ({ }) => {

    const products = [
        {
            type: 'product',
            image: set2,
            price: "$17.95",
            productName: "Sriracha Sampler",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: set4,
            price: "$12.95",
            productName: "Chilli Sauce Exotic",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: set1,
            price: "$17.95",
            productName: "Hot Sauce Heaven",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: set3,
            price: "$5.95",
            productName: "The Scorchers",
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
                            productName={product.productName}
                        />
                    ))
                }
            </div>
        </>

    )
}

export default BestSellers;
