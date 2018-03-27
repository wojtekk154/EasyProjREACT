import * as types from '../../utils/actions';

const initialState = {
    email: '',
    accessToken: '',
    username: ''
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_NEW_USER_SUCCESS_ACTION:
            return {
                email: action.payload.email,
                username: action.payload.username,
                accessToken: action.payload.access_token
            };
        case types.LOGIN_NEW_USER_FAILURE_ACTION:
        default:
            return state;
    }
}