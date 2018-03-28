import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';

import './index.css';

const Header = ({brand, urlData}) => {
    return (
        <header className="header">
            <div className="brand-name">
                {brand}
            </div>
            <ul className="app-menu">
                <li className="active">
                    <Link to="/" className="app-link"><MaterialIcon ico="home" size/>Home1</Link>
                </li>
                <li>
                    <Link to="/" className="app-link"><MaterialIcon ico="home"/>Home2</Link>
                </li>
                <li>
                    <Link to="/" className="app-link"><MaterialIcon ico="home"/>Home3</Link>
                </li>
                <li>
                    <Link to="/" className="app-link"><MaterialIcon ico="home"/>Home4</Link>
                </li>
                <li>
                    <Link to="/" className="app-link"><MaterialIcon ico="home"/>Home5</Link>
                </li>
            </ul>
        </header>
    );
};
Header.propTypes = {
    brand: PropTypes.string,
    urlData: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        icon: PropTypes.string
    }))
};
export default Header;