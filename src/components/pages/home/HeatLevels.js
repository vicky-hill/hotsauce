import React from 'react';
import Heading from '../../elements/Heading';
import Card from '../../elements/Card';

import level1 from '../../../assets/level1.png';
import level2 from '../../../assets/level2.png';
import level3 from '../../../assets/level3.png';
import level4 from '../../../assets/level4.png';

const HeatLevels = ({ }) => {

    const levels = [
        {
            image: level1,
            type: 'heat',
            text: 'Our mildest sauces, ideal for anyone who doesn\’t want to get burned',
            highlight: 'mildest sauces',
            heatlevel: 'mild'
        },
        {
            image: level2,
            type: 'heat',
            text: 'Our medium sauces, for those who like to play it save without missing out',
            highlight: 'medium sauces',
            heatlevel: 'medium'
        },
        {
            image: level3,
            type: 'heat',
            text: 'Our hot sauces, perfect for adding heat to any meal or snack',
            highlight: 'hot sauces',
            heatlevel: 'hot'
        },
        {
            image: level4,
            type: 'heat',
            text: 'Our extra sauces, for risk takers only, enjoy with caution',
            highlight: 'extra sauces',
            heatlevel: 'extra'
        }
    ]

    return (
        <>
            <Heading className="my-5" accent="Shop" text="hot sauces by heat" left={30} />
            <div className="recipes mt-4">
                {
                    levels.map((level, i) => (
                        <Card
                            key={i}
                            type={level.type}
                            image={level.image}
                            text={level.text}
                            highlight={level.highlight}
                            heatlevel={level.heatlevel}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default HeatLevels;
