import React from 'react';
import {Link} from 'react-router-dom'

// import styles
import './login.scss';

var FontAwesome = require('react-fontawesome');

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.setSitebarClosed = this.setSitebarClosed.bind(this);
		this.setSitebarClosed();
		this.logInUser = this.logInUser.bind(this);
		this.state = {};
	}

	setSitebarClosed() {
		this.props.closedSideBar(true);
	}

	logInUser(e) {
		e.preventDefault();
		this.props.fetchLoginUser({email: this.refs.email.value, password: this.refs.password.value});
	}

	render() {
		return (
			<div className="login-component">
				<form ref="loginForm" className="login-form" onSubmit={($event)=> this.logInUser($event)}>
					<label className="text-field"> <FontAwesome name="at"/> <input ref="email" type="email" placeholder="email"/></label>
					<label className="text-field"> <FontAwesome name="unlock-alt"/> <input ref="password" type="password"
																																								 placeholder="Password"/></label>

					<label className="remember-me"><input type="checkbox" name="remember_me"/> Remember me!</label>

					<input type="submit" className='submit-button'/>

					<div className="additional-links">
						<Link to={'/register'} className="additional-link">Create new accout</Link>

						<Link to={'#'} className="additional-link">Reset password</Link>
					</div>
				</form>
			</div>
		);
	}
}
