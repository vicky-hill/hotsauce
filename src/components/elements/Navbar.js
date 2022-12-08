import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import SideCart from '../pages/cart/SideCart';

const Navbar = ({ }) => {
    const [sidecart, setSidecart] = useState(false);

    return (
        <>
            
            <nav className='navbar'>
                <h1 className='navbar__logo'><span className='navbar__logo--accent'>Hill</span> Sauce & Co.</h1>
                <div className="navbar__menu">
                    <ul>
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
                        <FontAwesomeIcon icon={faUser} color="#fff" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} color="#fff" />
                        <FontAwesomeIcon icon={faCartShopping} onClick={() => setSidecart(true)} color="#fff" />
                    </div>
                </div>
            </nav>

            <SideCart open={sidecart} close={() => setSidecart(false)} />
        </>
    )
}

export default Navbar;
