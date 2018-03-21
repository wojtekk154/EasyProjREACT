import React from 'react'
import {Field, reduxForm} from 'redux-form'

function SignUpForm(props) {
    const {error, handleSubmit, pristine, reset, submitting} = props

    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" component="Input" type="text" label="Username"/>
            <Field name="email" component="Input" type="email" label="Email"/>
            <Field name="password" component="Input" type="password" label="Password"/>
            <Field name="password_confirmation" component="Input" type="password" label="Password Confirmation"/>
            {error && <strong>{error}</strong>}
            <div>
                <button type="submit" disabled={submitting}>
                    Log In
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    );
};

SignUpForm = reduxForm({
    form: 'signup'
})(SignUpForm);

export default SignUpForm;