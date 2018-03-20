import AuthService from '../../Services/AuthService';
import {loadingAction} from '../Common';

const authenticationService = new AuthService();

export function registerNewUserSuccessAction() {
    return {}
}

export function registerNewUserFaliureAction() {
    return {}
}

export function registerNewUserLoadingAction(value) {
    return {}
}

export const registerNewUserAction = (credentials) => {
    return dispatch => {
        dispatch(loadingAction());
        console.log(credentials);
        authenticationService.signUpNewUser(credentials)
            .then(e => console.log(e))
    };
};