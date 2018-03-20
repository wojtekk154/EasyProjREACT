import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Input(props) {
    return (
        <div>
            <div title={props.label} className="input-field">
                <label title={props.label}>{props.label}</label>
                <input
                    className={props.styling}
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onInputChange}
                />
            </div>
            <span>
                {!!props.error && props.error}
            </span>
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    styling: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    error: PropTypes.string,
    name: PropTypes.string.isRequired,
    onInputChange: PropTypes.func
};

Input.defaultProps = {
    type: 'text',
    styling: 'primary'
};

export default Input;