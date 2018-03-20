import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function Button(props) {
    return (
        <div>
            <button
                className={`btn btn-${props.type}`}
                type="button"
                disabled={props.disabled || props.loading}
                onClick={props.onButtonClick}
            >
                {props.name}
            </button>
        </div>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onButtonClick: PropTypes.func
};

Button.defaultProps = {
    type: 'primary'
};

export default Button;