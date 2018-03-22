import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function Input(props) {
    const {input, label, type, meta: {touched, error}, ...others} = props;
    return (
        <div>
            <div className="input-field">
                <label>{label}</label>
                <input {...input} {...others} placeholder={label} type={type}/>
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