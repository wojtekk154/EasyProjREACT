import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import {ActionCreators} from '../../../actions';

import './index.css';

class SignIn extends React.Component {

    render() {
        return (
            <div className="registration-form">

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        ActionCreators,
        dispatch
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);