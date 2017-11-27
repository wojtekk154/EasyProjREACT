import React from 'react';
import {Link} from 'react-router-dom'

// import styles
import './register.scss';

var FontAwesome = require('react-fontawesome');

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.closedSidebar = this.closedSidebar.bind(this);
		this.registerUser = this.registerUser.bind(this);
		this.closedSidebar();
	}

	closedSidebar() {
		this.props.closedSideBar(true);
	}

	registerUser(e) {
		e.preventDefault();
		const data = {
			email: this.refs.email.value,
			username: this.refs.username.value,
			password: this.refs.password.value,
		};
		this.props.fetchRegisterNewUser(data);
		this.refs.registerForm.reset();
	}

	render() {
		return (
			<div className="register-component">
				<form ref="registerForm" className="login-form" onSubmit={this.registerUser}>
					<label className="text-field"> <FontAwesome name="at"/> <input ref="email" type="email" placeholder="email"/></label>
					<label className="text-field"> <FontAwesome name="user"/> <input ref="username" type="text"
																																					 placeholder="User Name"/></label>
					<label className="text-field"> <FontAwesome name="unlock-alt"/> <input ref="password" type="password"
																																								 placeholder="Password"/></label>
					<label className="text-field"> <FontAwesome name="unlock-alt"/> <input ref="password_confirmation"
																																								 type="password"
																																								 placeholder="Password Confirmation"/></label>

					<input type="submit" className='submit-button'/>

					<div className="additional-links">
						<Link to={'/login'} className="additional-link">Sign In</Link>

						<Link to={'#'} className="additional-link">Reset password</Link>
					</div>
				</form>
			</div>
		)
	}
}
