import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import chilli from '../../assets/chilli.png';

import SideCart from '../pages/cart/SideCart';

const Navbar = ({ }) => {
    const [sidecart, setSidecart] = useState(false);
    const [logo, setLogo] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            if(window.scrollY > 70) {
                setLogo(true);
            } else {
                setLogo(false);
            }
        });
    }, [])

    
    return (
        <>
            <header className='header'>
                <Link to="/">
                    <h1 className='header__logo'><span className='header__logo--accent'>Hill</span> Sauce & Co.</h1>
                </Link>
            </header>

            <nav className='navbar'>

                <div className="navbar__menu">
                    <ul>
                        <li className={`navbar__logo ${logo ? 'show' : ''}`} >
                            <img src={chilli} />
                        </li>
                        <li>
                            <a href="#">Hot Sauces</a>
                        </li>
                        <li>
                            <a href="#">Hot Sauce Gifts</a>
                        </li>
                        <li>
                            <a href="#">Hot Sauce Stores</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <div className="navbar__icons">
                        <div className="navbar__icons-btn">
                            <FontAwesomeIcon icon={faUser} color="#fff" />
                        </div>

                        <div className="navbar__icons-btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} color="#fff" />
                        </div>

                        <div className="navbar__icons-btn">
                            <FontAwesomeIcon icon={faCartShopping} onClick={() => setSidecart(true)} color="#fff" />
                            <span className='navbar__icons-badge'>2</span>
                        </div>

                    </div>
                </div>
            </nav>

            <SideCart open={sidecart} close={() => setSidecart(false)} />
        </>
    )
}

export default Navbar;
