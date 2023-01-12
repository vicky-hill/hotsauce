import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ }) => {

    const [hide, setHide] = useState(false);

    useEffect(() => {
        window.location.href.includes('checkout') ? setHide(true) : setHide(false);
    }, [])

    return (
        <footer className={`footer ${hide ? 'hide' : ''}`}>
            <div className="footer__content">
                <div className="footer__content-links">
                    <a href="#">TERMS</a>
                    <a href="#">PRIVACY</a>
                    <a href="#">CONTACT</a>
                    <a href="#">FAQ</a>
                </div>
                <p className='footer__content-copy'>&copy; Hill Sauce & Co. All rights reserved.</p>
                <div className="footer__content-social">
                    <FontAwesomeIcon className="mr-3" icon={faFacebookF} color="#fff" />
                    <FontAwesomeIcon className="mr-3" icon={faTwitter} color="#fff" />
                    <FontAwesomeIcon className="mr-3" icon={faInstagram} color="#fff" />
                    <FontAwesomeIcon className="mr-3" icon={faLinkedin} color="#fff" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
