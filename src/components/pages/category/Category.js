import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';


import product1 from '../../../assets/product1.png';
import product2 from '../../../assets/product2.png';
import product3 from '../../../assets/product3.png';
import product4 from '../../../assets/product4.png';
import product5 from '../../../assets/product5.png';

import Card from '../../elements/Card';
import Heading from '../../elements/Heading';
import Container from '../../layout/Container';

const Category = ({ }) => {

    const { category } = useParams();
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const products = [
        {
            type: 'product',
            image: product2,
            price: "$17.95",
            name: "Sriracha Sampler",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: product4,
            price: "$12.95",
            name: "Chilli Sauce Exotic",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: product1,
            price: "$17.95",
            name: "Hot Sauce Heaven",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: product3,
            price: "$5.95",
            name: "The Scorchers",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: product5,
            price: "$5.95",
            name: "The Scorchers",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: product2,
            price: "$17.95",
            name: "Sriracha Sampler",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: product4,
            price: "$12.95",
            name: "Chilli Sauce Exotic",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: product1,
            price: "$17.95",
            name: "Hot Sauce Heaven",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: product3,
            price: "$5.95",
            name: "The Scorchers",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            type: 'product',
            image: product5,
            price: "$5.95",
            name: "The Scorchers",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]

    return (
        <Container>
            <Heading className="my-5 mt-5" text={`${category} hot sauces`} />
            <div className="grid mt-4">
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
        </Container>
    )
}

export default Category;
