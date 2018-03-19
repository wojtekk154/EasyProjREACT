import React from 'react';
import MaterialIcon, {colorPallet} from 'material-icons-react';

import './style.css';

const NotFound = () =>{
    return (
        <div className="not-found-page">
            <span className="message">
                Page Not Found!
            </span>
            <div className="icon">
                <MaterialIcon icon="warning" size="100" color={colorPallet.amber._200} />
            </div>
        </div>
    );
};

export default NotFound;