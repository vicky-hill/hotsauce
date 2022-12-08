import React from 'react';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import set1 from '../../../assets/set1.png';
import set2 from '../../../assets/set3.png';

import Button from '../../elements/Button';

const SideCart = ({ open, close }) => {

    return (
        <SlidingPane
            // closeIcon={<i className="fas fa-times" style={{ fontSize: 18 }}></i>}
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

                        <div className="sidecart__content-item">
                            <img src={set1} className="sidecart__content-image" />
                            <div className="sidecart__content-info">
                                <p className='sidecart__content-name'>Hot Sauce Heaven</p>
                                <p className='sidecart__content-price'>$33.95</p>
                            </div>
                        </div>

                        <div className="sidecart__content-item">
                            <img src={set2} className="sidecart__content-image" />
                            <div className="sidecart__content-info">
                                <p className='sidecart__content-name'>The scorchers</p>
                                <p className='sidecart__content-price'>$17.95</p>
                            </div>
                        </div>


                    </div>

                    {/* Checkout info */}
                    <div className="sidecart__footer">
                        <div className="sidecart__footer-line">
                            <p>Subtotal:</p>
                            <p>$33.95</p>
                        </div>
                        <div className="sidecart__footer-line">
                            <p>Delivery:</p>
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

export default SideCart;
