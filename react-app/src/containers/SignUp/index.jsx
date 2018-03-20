import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {ActionCreators} from '../../actions';
import Input from '../../components/Input';

import './index.css';
import Button from "../../components/Button/index";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.submitRegistration = this.submitRegistration.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
    }

    submitRegistration() {
        console.log(this.props);
        this.props.registerNewUserAction(this.state);
    }

    getInputValue(e) {
        this.setState({ [e.target.name]: e.target.value});

    }

    render() {
        return (
            <div className="registration-form">
                <form>
                    <h2>Registration Form</h2>
                    <Input label="Email" name="email" placeholder="Insert email" onInputChange={this.getInputValue}/>
                    <Input label="First name" name="first_name" placeholder="Insert first name" onInputChange={this.getInputValue}/>
                    <Input label="Last name" name="last_name" placeholder="Insert last name" onInputChange={this.getInputValue}/>
                    <Input label="Password" name="password" type="password" placeholder="Insert password" onInputChange={this.getInputValue}/>
                    <Input label="Password confirmation" name="password_confirmation" type="password" placeholder="Insert password confirmation" onInputChange={this.getInputValue}/>
                    <Button
                        onButtonClick={this.submitRegistration}
                        loading={false}
                        name="Sign up!"/>
                </form>
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