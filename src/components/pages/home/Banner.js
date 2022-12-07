import React from 'react';
import bannerImage from '../../../assets/bannerimage.png';
import Button from '../../elements/Button';

const Banner = ({ }) => {

    return (
        <div className='banner'>
            <div className='banner__text pl-4'>
                <span className='banner__accent'>Delicious </span> <span className='banner__line'>hot sauces</span>
                <span className='banner__line banner__line--block'>to spice up any</span>
                <span className='banner__line banner__line--block mt-4'>meal!</span>

                <p className='mt-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br />
                    enim ad minim veniam.
                </p>
                <Button rounded variant="secondary" className="banner__btn">Start Shopping</Button>
            </div>
            <img src={bannerImage} className="banner__image" />
        </div>
    )
}

export default Banner;
