import AuthService from '../../Services/AuthService';
import {loadingAction} from '../Common';

import * as types from '../../utils/actions';

const authService = new AuthService();


export const loginUserAction = (credentials) => {
    return dispatch => {
        dispatch(loadingAction(true));

        authService.signInUser(credentials)
            .then(response => dispatch(loginUserSuccessAction(response)))
            .catch(e => dispatch(loginUserFaliureAction(e)))
            .finally(() => dispatch(loadingAction(false)));
    };
};


export const loginUserSuccessAction = (data) => {
    return {
        type: types.LOGIN_NEW_USER_SUCCESS_ACTION,
        payload: data
    }
};


export const loginUserFaliureAction = (data) => {
    return {
        type: types.LOGIN_NEW_USER_FAILURE_ACTION,
        payload: data
    }
};

export const logOutAction = () => {
    return {
        type: types.LOGOUT_ACTION
    }
};