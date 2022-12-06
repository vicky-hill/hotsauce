import React from 'react';
import Container from '../layout/Container';
import Recipes from './Recipes';
import BestSellers from './BestSellers';
import Space from '../elements/Space';

const Home = ({ }) => {

    return (
        <Container center>
            <BestSellers />
            <Space md />
            <Recipes />
        </Container>
    )
}

export default Home;
