import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {SubmissionError} from 'redux-form';

import {ActionCreators} from '../../../actions';
import SignUpForm from '../../../components/RegisterForm';
import AuthService from '../../../Services/AuthService';

import './index.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password: '',
                username: '',
                password_confirmation: ''
            },
            valid: {
                email: false,
                password: false,
                username: false,
                password_confirmation: false
            }
        };


        this.authenticationService = new AuthService();
        this.submitRegistration = this.submitRegistration.bind(this);
    }

    submitRegistration(e) {
        if (e.username.length === 0) {
            throw new SubmissionError({
                username: 'Fill field username',
                _error: 'Register failed!'
            })
        }

        // if (false) {
        //     this.authenticationService.signUpNewUser({
        //         email: this.state.data.email,
        //         password: this.state.data.password,
        //         username: this.state.data.username
        //     })
        //         .then(e => {
        //             return <Redirect to="/signin"/>;
        //         })
        //         .catch(e => {
        //             console.log(e);
        //         });
        // } else {
        //     console.log('error')
        // }
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
    return {};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        ActionCreators,
        dispatch
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);


// this.resetErrors();
// for (let property in this.state.data) {
//     if (this.state.data.hasOwnProperty(property)) {
//         formFieldsData[property].validation.forEach(item => {
//             this.errors[property] = [...this.state.errors[property], ...validators[item](this.state.data[property])];
//             if (property === 'password')
//                 this.errors[property] = [
//                     ...this.state.errors[property],
//                     ...validators['passwordAggrements'](this.state.data.password, this.state.data.password_confirmation)
//                 ];
//         });
//     }
//     console.log(this.errors[property], !!this.errors[property].length)
// }
//
// <div className="registration-form">
//     <form noValidate onSubmit={this.submitRegistration}>
//         <h2>Registration Form</h2>
//         <Input
//             label="Email"
//             name="email"
//             type="email"
//             placeholder="Insert email"
//             errors={this.errors.email}
//             onInputChange={this.getInputValue}
//         />
//         <Input
//             label="User name"
//             name="username"
//             placeholder="Insert username"
//             errors={this.errors.username}
//             onInputChange={this.getInputValue}
//         />
//         <Input
//             label="Password"
//             name="password"
//             type="password"
//             placeholder="Insert password"
//             errors={this.errors.password}
//             onInputChange={this.getInputValue}
//         />
//         <Input
//             label="Password confirmation"
//             name="password_confirmation"
//             type="password"
//             errors={this.errors.password_confirmation}
//             placeholder="Insert password confirmation"
//             onInputChange={this.getInputValue}
//         />
//         <button type="submit">Sign Up!</button>
//     </form>
// </div>