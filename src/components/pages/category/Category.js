import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../../elements/Heading';
import Container from '../../layout/Container';
import ProductGrid from '../product/ProductGrid';

import images from '../../../utils/images';

const Category = ({ allProducts }) => {

    const [products, setProducts] = useState([]);

    const { category } = useParams();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        if (allProducts) setProducts(
            allProducts
                .filter(product => product.heatLevel === category)
                .map(product => { return { ...product, image: images[product.image] } })
        )
    }, [allProducts])

    console.log(products)

    return (
        <Container>
            <Heading className="my-5 mt-5" text={`${category} hot sauces`} />
            {
                products && (
                    <ProductGrid products={products} />
                )
            }

        </Container>
    )
}

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    allProducts: state.productsReducer.allProducts
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
