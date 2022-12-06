import React from 'react';
import Heading from '../elements/Heading';
import Container from '../layout/Container';

const Home = ({ }) => {

    return (
        <Container center>
            <Heading className="mt-5" accent="Our" text="hot sauce recipes" center />
        </Container>
    )
}

export default Home;
