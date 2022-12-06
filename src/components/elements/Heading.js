import React from 'react';
import flame from '../../assets/flame.png';
import { getClassName } from '../../utils/getClassName';

const Heading = ({ accent, text, center, className }) => {

    return (
        <div className={getClassName('heading', className)}>
            <img className='heading__image' src={flame} />
            <h2 className="heading__text"><span className='heading__accent'>{accent}</span> {text}</h2>
        </div>
    )
}

export default Heading;
