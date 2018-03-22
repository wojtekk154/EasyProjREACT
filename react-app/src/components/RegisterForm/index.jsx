import React from 'react'
import {Control, Field, reduxForm} from 'redux-form';


import './index.css';


function SignUpForm(props) {
    const {error, handleSubmit, submitErrors, pristine, reset, submitting} = props;
    console.log(props);
    return (
        <form noValidate onSubmit={handleSubmit}>
            <div
                className={'input-field' + (!!submitErrors && submitErrors.hasOwnProperty('username') ? ' error' : '')}>
                <label>Username</label>
                <Field name="username" component="input" type="text" required="true"/>
                <span> {(!!submitErrors && submitErrors.hasOwnProperty('username')) && submitErrors.username}</span>
            </div>
            <div
                className={'input-field' + (!!submitErrors && submitErrors.hasOwnProperty('username') ? ' error' : '')}>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" required/>
                <span> {(!!submitErrors && submitErrors.hasOwnProperty('username')) && submitErrors.username}</span>
            </div>
            <div
                className={'input-field' + (!!submitErrors && submitErrors.hasOwnProperty('password') ? ' error' : '')}>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" required/>
                <span> {(!!submitErrors && submitErrors.hasOwnProperty('password')) && submitErrors.password}</span>
            </div>
            <div
                className={'input-field' + (!!submitErrors && submitErrors.hasOwnProperty('password_confirmation') ? ' error' : '')}>
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <Field name="password_confirmation" component="input" type="password" required/>
                <span> {(!!submitErrors && submitErrors.hasOwnProperty('password_confirmation')) && submitErrors.password_confirmation}</span>
            </div>
            <div
                className={'input-field' + (!!submitErrors && submitErrors.hasOwnProperty('image') ? ' error' : '')}>
                <label htmlFor="image">Inage</label>
                <Field name="image" component="input" type="file"/>
                 {!!submitErrors && submitErrors.hasOwnProperty('image') && <span>submitErrors.image</span>}
            </div>
            <div className="submit-container">
                <button type="submit" disabled={submitting}>
                    Log In
                </button>
            </div>
        </form>
    );
};

SignUpForm = reduxForm({
    form: 'signup'
})(SignUpForm);

export default SignUpForm;