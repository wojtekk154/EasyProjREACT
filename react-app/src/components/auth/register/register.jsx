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
			<div className="Register">
				<form ref="registerForm" className="Register-form" onSubmit={this.registerUser}>
					<label className="Register-form-text"> <FontAwesome name="at"/> <input ref="email" type="email" placeholder="email"/></label>
					<label className="Register-form-text"> <FontAwesome name="user"/> <input ref="username" type="text"
																																					 placeholder="User Name"/></label>
					<label className="Register-form-text"> <FontAwesome name="unlock-alt"/> <input ref="password" type="password"
																																								 placeholder="Password"/></label>
					<label className="Register-form-text"> <FontAwesome name="unlock-alt"/> <input ref="password_confirmation"
																																								 type="password"
																																								 placeholder="Password Confirmation"/></label>

					<input type="submit" className='Register-form-submit'/>

					<div className="Register-form-additional-links">
						<Link to={'/login'} className="additional-link">Sign In</Link>

						<Link to={'#'} className="additional-link">Reset password</Link>
					</div>
				</form>
			</div>
		)
	}
}
