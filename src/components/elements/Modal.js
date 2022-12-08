import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types'

const Modal = ({ open, close, className, title, shouldCloseOnOutsideClick, children }) => {
    useEffect(() => {
        const body = document.querySelector('body').classList
        open ? body.add('no-scroll') : body.remove('no-scroll')
    }, [open])

    const closeOnOutsideClick = (e) => {
        if (shouldCloseOnOutsideClick && e.target.classList[0] === 'modal') {
            close()
        }
    }

    return (
        <div className={`modal ${open ? 'open' : ''}`} onClick={(e) => closeOnOutsideClick(e)}>
            <div className={"modal__content " + className}>
                {children}
            </div>
        </div>
    )
}

Modal.defaultProps = {
    shouldCloseOnOutsideClick: true,
    className: ""
}

Modal.propTypes = {
    open: PropTypes.bool,
    close: PropTypes.func,
    shouldCloseOnOutsideClick: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.element,
    className: PropTypes.string
}

export default Modal;
