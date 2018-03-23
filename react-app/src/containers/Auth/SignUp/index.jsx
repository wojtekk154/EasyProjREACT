import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {SubmissionError} from 'redux-form';
import {Redirect} from 'react-router-dom';

import {ActionCreators} from '../../../actions';
import SignUpForm from '../../../components/RegisterForm';
import AuthService from '../../../Services/AuthService';

import './index.css';
import {validators} from "../../../utils/validators";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.authenticationService = new AuthService();
        this.submitRegistration = this.submitRegistration.bind(this);
    }

    submitRegistration(values) {
        let error = false;

        if (!values.username || (!!values.username && values.username.length === 0)) {
            error = true;
            throw new SubmissionError({
                username: 'Field is required!',
                _error: 'Failed Registration!'
            });
        }
        if (!values.email) {
            error = true;
            throw new SubmissionError({
                email: 'Field is required!',
                _error: 'Failed Registration!'
            });
        } else if (!!values.email) {
            if (values.email.length === 0) {
                error = true;
                throw new SubmissionError({
                    email: 'Field is required!',
                    _error: 'Failed Registration!'
                });
            } else if (!validators.email(values.email)) {
                error = true;
                throw new SubmissionError({
                    email: 'Email is incorrect!',
                    _error: 'Failed Registration!'
                });
            }
        }
        if (!!values.password) {
            if (values.password.length === 0) {
                error = true;
                throw new SubmissionError({
                    password: 'Field is required!',
                    _error: 'Failed Registration!'
                });
            } else if (values.password > 0 && values.password < 6) {
                error = true;
                throw new SubmissionError({
                    password: 'Password is to short!',
                    _error: 'Failed Registration!'
                });
            } else if (!values.passwordConfirmation || (values.password !== values.passwordConfirmation)) {
                error = true;
                throw new SubmissionError({
                    password: 'Password and Password Confirmations are not the same!',
                    passwordConfirmation: 'Password and Password Confirmations are not the same!',
                    _error: 'Failed Registration!'
                });
            }
        } else if (!values.password) {
            error = true;
            throw new SubmissionError({
                password: 'Field is required!',
                _error: 'Failed Registration!'
            });
        }
        if (!values.passwordConfirmation || values.passwordConfirmation.length === 0) {
            error = true;
            throw new SubmissionError({
                passwordConfirmation: 'Field is required!',
                _error: 'Failed Registration!'
            });
        }

        if (!error) {
            this.authenticationService.signUpNewUser({
                email: values.email,
                password: values.password,
                username: values.username
            })
                .then(response => {
                    window.location.href = '/signin';
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    render() {
        return (
            <div className="registration-form">
                <SignUpForm onSubmit={this.submitRegistration}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        signup: state.form.signup
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        ActionCreators,
        dispatch
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
