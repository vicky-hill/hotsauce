import React, { useEffect, useState} from 'react';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { getCartItemInfo } from '../../../utils/getCartItemInfo';
import images from '../../../utils/images';
import { connect } from 'react-redux';


import set1 from '../../../assets/set1.png';
import set2 from '../../../assets/set3.png';

import Button from '../../elements/Button';

const SideCart = ({ open, close, cartItems, allProducts }) => {
    
    const [items, setItems] = useState([])

    useEffect(() => {
        if(cartItems) {
            setItems(getCartItemInfo(cartItems, allProducts).map(product => { return { ...product, image: images[product.image] }}));
        }     
    }, [cartItems, allProducts])

    return (
        <SlidingPane
            isOpen={open}
            hideHeader
            onRequestClose={close}
            width="325px"
            className='sidecart'
        >
            <div className="sidecart">
                <div>
                    {/* Header */}
                    <div className="sidecart__header">
                        <p>Cart</p>
                        <FontAwesomeIcon onClick={close} style={{ cursor: "pointer" }} icon={faX} color="silver" />
                    </div>

                    {/* Cart items */}
                    <div className="sidecart__content">
                        {
                            items.map(item => (
                                <div className="sidecart__content-item">
                                <img src={item.image} className="sidecart__content-image" />
                                <div className="sidecart__content-info">
                                    <p className='sidecart__content-name'>{item.name}</p>
                                    <p className='sidecart__content-price'>${item.price}</p>
                                </div>
                            </div>
                            ))
                        }
                    </div>

                    {/* Checkout info */}
                    <div className="sidecart__footer">
                        <div className="sidecart__footer-line">
                            <p>Subtotal:</p>
                            <p>$33.95</p>
                        </div>
                        <div className="sidecart__footer-line">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <div className="sidecart__footer-line sidecart__footer-total">
                            <p>Total:</p>
                            <p>$33.95</p>
                        </div>
                    </div>
                </div>

                <Button variant="secondary" block>Checkout</Button>
            </div>
        </SlidingPane>
    )
}

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    allProducts: state.productsReducer.allProducts,
    cartItems: state.cartReducer.cartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(SideCart);
