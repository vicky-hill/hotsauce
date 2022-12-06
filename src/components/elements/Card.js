import React from 'react';
import Button from './Button';
import { PropTypes } from 'prop-types';
import "./Card.scss";

const Card = ({ image, title, text, time }) => {

    return (
        <div className="card w-25 m-30">
            <div className="card__image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="card__body">
                <h5 className="card__title">{title}</h5>
                <p className="card__text">{text}</p>
                <div className="card__cto">
                    <p>{time}</p>
                    <Button>See Recipe</Button>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.string
}

export default Card;
