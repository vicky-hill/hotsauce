import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ }) => {

    return (
        <nav className='navbar'>
            <h1 className='navbar__logo'><span className='navbar__logo--accent'>Hill</span> Sauce & Co</h1>
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
                    <FontAwesomeIcon icon={faCartShopping} color="#fff" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
