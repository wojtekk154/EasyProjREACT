import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function Input({input, label, type, meta: {touched, error}}) {
    return (
        <div>
            {label}
            <div className="input-field">
                <label>{label}</label>
                <input {...input} placeholder={label} type={type}/>
            </div>
            {touched && error && <span>{error}</span>}
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired
};

Input.defaultProps = {
    type: 'text'
};

export default Input;