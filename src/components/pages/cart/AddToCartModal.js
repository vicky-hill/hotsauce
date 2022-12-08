import React from 'react';
import Button from '../../elements/Button';
import Modal from '../../elements/Modal';

const AddToCartModal = ({ modal, setModal, product }) => {

    return (
        product ? (
            <Modal title="Modal" open={modal} close={() => setModal(false)} className="add-to-cart-modal">
                <h3>Item was added to your cart</h3>
                <div className="add-to-cart-modal__product">
                    <img src={product.image} className="add-to-cart-modal__product-image" />
                    <div className="add-to-cart-modal__product-info">
                        <p className='add-to-cart-modal__product-name'>{product.name}</p>
                        <p className='add-to-cart-modal__product-price'>{product.price}</p>
                    </div>
                </div>
                <div className="add-to-cart-modal__btns">
                    <Button variant='secondary' className="mr-3">View Cart</Button>
                    <Button>Checkout</Button>
                    <Button style={{ marginLeft: "auto" }} variant='secondary' outline>Continue Shopping</Button>
                </div>
            </Modal>
        ) : null

    )
}

export default AddToCartModal;
