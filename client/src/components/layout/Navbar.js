import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({title}) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{title}</a>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Navbar;
