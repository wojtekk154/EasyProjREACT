import React from 'react';

import './index.css';

function Loader() {
    return (
        <div className="container">
            <span className="loading-icon">
                <i className="material-icons">loop</i>
            </span>
        </div>
    );
}

export default Loader;