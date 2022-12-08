import React from 'react';
import flame from '../../assets/flame.png';
import { getClassName } from '../../utils/getClassName';
import { PropTypes } from 'prop-types';

const Heading = ({ accent, text, center, top, left, className }) => {
    
    const adjustStyle = {}
    if(top) adjustStyle.top = top + 'px';
    if(left) adjustStyle.left = left + 'px';

    return (
        <div className="heading__container">
            <div className={getClassName('heading', className)} >
                <img className='heading__image' src={flame} style={adjustStyle} />
                <h2 className="heading__text"><span className='heading__accent'>{accent}</span> {text}</h2>
            </div>
        </div>
    )
}


Heading.propTypes = {
    accent: PropTypes.string,
    text: PropTypes.string,
    center: PropTypes.bool,
    top: PropTypes.number,
    left: PropTypes.number,
    className: PropTypes.string
}

export default Heading;
