import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getHeatLevelColor } from '../../utils/getHeatLevelColor';

import Button from './Button';

import bottle1 from '../../assets/bottle1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Card = ({ type, image, title, text, highlight, time, price, productName, heatlevel, className, onClick }) => {

    const getTextWithHightlights = (text, highlight) => {
        const textArr = text.split(highlight)
        textArr.splice(1, 0, highlight)

        return (
            <>
                {textArr[0]}
                <span style={{ fontWeight: 700, color: getHeatLevelColor(heatlevel, true) }}>{textArr[1]}</span>
                {textArr[2]}
            </>
        )
    }

    const recipeCard = (
        <div className={"card " + className}>
            <div className="card__image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="card__body">
                <h5 className="card__title">{title}</h5>
                <p className="card__text">{text}</p>
                <div className="card__cto">
                    <p className="card__cto-time">{time}</p>
                    <Button>See Recipe</Button>
                </div>
            </div>
        </div>
    )

    const heatCard = (
        <div className={"card card--heat-level " + className}>
            <img className="card__image" src={image} />
            <div className="card__body">
                <p className="card__text">{getTextWithHightlights(text, highlight)}</p>
                <Link to={`category/${heatlevel}`}>
                    <Button
                        rounded
                        gradient={getHeatLevelColor(heatlevel)}>
                        {`SHOP ${heatlevel && heatlevel.toUpperCase()}`}
                    </Button>
                </Link>
            </div>
        </div>
    )

    const productCard = (
        <div className={"card card--add-to-cart  " + className}>
            <div className="card__body">
                <img className="card__image" src={image} />
                <p className="card__name">{productName}</p>
                <p className="card__text">{text}</p>
                <div className="card__cto">
                    <p className="card__cto-price">{price}</p>
                    <Button style={{ paddingLeft: '21px' }} onClick={onClick}>
                        <FontAwesomeIcon className="mr-3" icon={faCartShopping} color="#fff" />
                        Add To Cart
                    </Button>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {
                type === 'recipe' ? recipeCard :
                    type === 'heat' ? heatCard :
                        type === 'product' ? productCard : null
            }
        </>
    )
}

const propTypesRecipeCard = {
    type: 'recipe',
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

const propTypesHeatLevelCard = {
    type: 'heat',
    image: PropTypes.string,
    text: PropTypes.string,
    highlight: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    heatlevel: PropTypes.oneOf(['mild', 'medium', 'hot', 'extra'])
}

const propTypesAddToCartCard = {
    type: 'product',
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    productName: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

Card.defaultProps = {
    className: ""
}

Card.propTypes = {
    type: PropTypes.oneOf(['recipe', 'heat', 'product']),
    heatlevel: PropTypes.oneOf(['mild', 'medium', 'hot', 'extra']),
    price: PropTypes.string,
    productName: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    highlight: PropTypes.string,
    time: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}


export default Card;
