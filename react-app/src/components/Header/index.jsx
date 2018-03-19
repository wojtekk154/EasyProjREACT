import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MaterialIcon from 'material-icons-react';

import './index.css';

const Header = ({brand}) => {
    return (
        <header className="header">
            <div className="brand-name">
                {brand}
            </div>
            <ul className="app-menu">
                <li>
                    <Link to="/" className="app-link"><MaterialIcon ico="home"/>Home1</Link>
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

export default Header;