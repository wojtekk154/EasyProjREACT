import React from 'react'
import {Field, Fields, reduxForm} from 'redux-form';

import './index.css';

const InputField = (field) => (
    <div>
        <div className={'input-field' + (!!field.meta.error ? ' error': '')}>
            <label>{field.label}</label>
            <input {...field.input} placeholder={field.label} type={field.type}/>
        </div>
        {field.meta.touched && field.meta.error && <strong className="error">{field.meta.error}</strong>}
    </div>
);

const PasswordFields = (fields) => (
    <div>
        <div>
            <div className={'input-field' + (!!fields.password.meta.error ? ' error': '')}>
                <label>Password</label>
                <input
                    {...fields.password.input}
                    type="password"
                    placeholder="Password"
                />
            </div>
            {fields.password.meta.touched && fields.password.meta.error &&
            <strong className="error">{fields.password.meta.error}</strong>}
        </div>
        <div>
            <div className={'input-field' + (!!fields.passwordConfirmation.meta.error ? ' error': '')}>
                <label>Password Confirmation</label>
                <input
                    {...fields.passwordConfirmation.input}
                    type="password"
                    placeholder="Password Confirmation"
                />
            </div>
            {fields.passwordConfirmation.meta.touched && fields.passwordConfirmation.meta.error &&
            <strong className="error">{fields.passwordConfirmation.meta.error}</strong>}
        </div>
    </div>
);

const fileField = ({ input, type, meta: { touched, error, warning } }) => {
    delete input.value;

    return (
        <div className={'input-field' + (!!error ? ' error': '')}>
            <label>Avatar</label>
            <input {...input} type={type} />
        </div>
    );
};

const SignUpForm = (props) => {
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <form noValidate onSubmit={handleSubmit}>
            <Field
                name="username"
                component={InputField}
                label="User name"
                type="text"
            />
            <Field
                name="email"
                component={InputField}
                label="User e-mail address"
                type="email"
            />
            <Fields
                names={['password', 'passwordConfirmation']}
                component={PasswordFields}
                type="password"
            />
            <Field
                name="avatar"
                type="file"
                component={fileField}
            />
            <div className="submit-container">
                <button type="submit">
                    Log In
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'signup'
})(SignUpForm);
