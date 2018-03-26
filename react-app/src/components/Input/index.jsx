import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export const Input = ({props}) =>  {
    return (
        <div>
            <div className="input-field">
                <label>{label}</label>
                <input {...input} {...others} placeholder={label} type={type}/>
            </div>
        </div>
    );
};

export default Input;