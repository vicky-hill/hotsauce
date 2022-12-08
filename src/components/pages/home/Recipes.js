import React from 'react';
import Card from '../../elements/Card';
import Heading from '../../elements/Heading';
import Grid from '../../layout/Grid';

import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';
import img4 from '../../../assets/img4.png';
import img5 from '../../../assets/img5.png';

const Recipes = ({ }) => {

    const recipes = [
        {
            image: img1,
            title: "Ribeye Steak",
            time: "1 hour 20 min",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            image: img2,
            title: "Spicy Tacos",
            time: "30 min",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            image: img3,
            title: "Avocado Toast",
            time: "20 min",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            image: img5,
            title: "Grilled Ribs",
            time: "1 hour",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            image: img4,
            title: "Spice Mixes",
            time: "2 hour 30 min",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ]

    return (
        <>
            <Heading className="my-5" accent="Our" text="hot sauce recipes" />
            <Grid col={5} gap={3}>
                {
                    recipes.map((recipe, i) => (
                        <Card
                            key={i}
                            type="recipe"
                            image={recipe.image}
                            title={recipe.title}
                            text={recipe.text}
                            time={recipe.time}
                        />
                    ))
                }
            </Grid>
        </>
    )
}

export default Recipes;
