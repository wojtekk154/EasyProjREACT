//login
import * as actions from "./action.types";
import * as layout from './layout';

export const loginSuccess = (data) => {
	return {
		type: actions.LOGIN_SUCCESS,
		data
	};
}

export const loginError = (data) => {
	return {
		type: actions.LOGIN_ERROR,
		data
	};
}


export const logoutUser = () => {
	return {
		type: actions.LOGOUT,
		data: {}
	};
}

export const logoutError = (data) => {
	return {
		type: actions.LOGOUT,
		data: {}
	};
};

// register


export const registerSuccess = (data) => {
	return {
		type: actions.REGISTER,
		data
	};
};

export const registerError = (data) => {
	return {
		type: actions.REGISTER,
		data
	};
};


export const fetchLoginUser = (data) => {
	return (dispatch) => {
		try {
			fetch('http://localhost:1337/auth/sign_in', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: data.email,
					password: data.password
				})
			})
				.then((response) => {
					return response.json();
				})
				.then((response) => {
					return response;
				})
				.then((auth) => {
					dispatch(layout.iconsSideBar(true));
					dispatch(loginSuccess(auth));
				})
		} catch (e) {
			dispatch(loginError(e));
		}
	}
}


export const fetchRegisterNewUser = (data) => {
	return (dispatch) => {
		try {
			fetch('http://localhost:1337/auth/sign_up', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					username: data.username,
					email: data.email,
					password: data.password
				})
			})
				.then((response) => {
					return response.json();
				})
				.then((response) => {
					return response;
				})
				.then((auth) => {
					dispatch(registerSuccess(auth));
				})
		} catch (e) {
			dispatch(registerError(e));
		}
	}
}


export const logoutCurrentUser = () => {
	return (dispatch) => {
		dispatch(logoutUser());
		dispatch(layout.closedSideBar());
	}
}
