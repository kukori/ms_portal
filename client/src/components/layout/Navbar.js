import React from 'react';
import PropTypes from 'prop-types';
import Logout from '../auth/Logout';

const Navbar = ({title}) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo center">{title}</a>
                <ul id="nav-mobile" className="right">
                    <li><Logout /></li>
                </ul>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Navbar;
