import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Input from "../Input/index";
import {ActionCreators} from "../../actions";

import './index.css';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rememberMe: false,
            email: '',
            password: ''
        };

        this.inputChange = this.inputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.loginUserAction({email: this.state.email, password: this.state.password});
    }

    inputChange(e) {
        this.setState({
            [e.target.name]: e.target.name === 'rememberMe' ? e.target.checked : e.target.value
        });
    };


    render() {
        return (
            <div>
                <form noValidate onSubmit={this.handleSubmit}>
                    <h2>Sign in user:</h2>
                    <Input
                        onInputChange={this.inputChange}
                        name="email"
                        type="email"
                        label="E-mail"
                        error={'sss'}
                        value={this.state.email}
                    />
                    <Input
                        onInputChange={this.inputChange}
                        name="password"
                        type="password"
                        label="Password"
                        error={'sss'}
                        value={this.state.password}
                    />
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            id="rememberMe"
                            onChange={this.inputChange}
                            value={this.state.rememberMe}
                        />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <button type="submit">Sign in</button>
                </form>
            </div>
        );
    }
}

export default connect(() => {
    return {};
}, dispatch => {
    return bindActionCreators(ActionCreators, dispatch)
})(SignInForm);