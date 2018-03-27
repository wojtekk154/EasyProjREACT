import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Input = (props) =>  {
    return (
        <div>
            <div className="input-field">
                <label>{props.label}</label>
                <input name={props.name} value={props.value} onChange={props.onInputChange}  placeholder={props.label} type={props.type}/>
                {props.error && (<span>{props.error}</span>)}
            </div>
        </div>
    );
};

export default Input;