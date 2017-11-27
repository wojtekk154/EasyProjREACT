import * as actionType from '../actions/action.types';

const initial_state = {
	access_token: '',
	isLoggedIn: false,
	email: '',
	username: '',
	id: ''
};

export default (state = initial_state, action) => {
	switch (action.type) {
		case actionType.LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				email: action.data.email,
				id: action.data.id,
				username: action.data.username,
				access_token: action.data.access_token
			};
		case actionType.LOGIN_ERROR:
			return initial_state;
		case actionType.LOGOUT:
			return initial_state;
		default:
			return state;
	}
}
