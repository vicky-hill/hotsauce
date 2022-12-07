import React from 'react';
import { PropTypes } from 'prop-types';
import Button from './Button';
import bottle1 from '../../assets/bottle1.png';

const Card = ({ type, image, title, text, time, price, productName, heatlevel, className }) => {

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
                <p className="card__text">{text}</p>
                <Button 
                    rounded 
                    gradient={heatlevel === 'mild' ? 'green' : heatlevel === 'medium' ? 'orange' : heatlevel === 'hot' ? 'red' : 'crimson'}>
                        { `SHOP ${ heatlevel && heatlevel.toUpperCase()}` }
                </Button>
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
                    <Button>Add To Cart</Button>
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
}

const propTypesHeatLevelCard = {
    type: 'heat',
    image: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
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
    time: PropTypes.string,
    className: PropTypes.string
}


export default Card;
