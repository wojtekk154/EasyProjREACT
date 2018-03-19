import REGISTER_USER_URL from '../../utils/constats';

export function registerNewUserSuccessAction() {
    return {

    }
}

export function registerNewUserFaliureAction() {
    return {

    }
}

export function registerNewUserLoadingAction(value) {
    return {

    }
}

export const registerNewUserAction = (credentials) => {
    return dispatch => {
        fetch(REGISTER_USER_URL, {
            body: JSON.stringify(credentials),
            method: 'POST'
        })
            .then(resp => resp.json())
            .then(data => {

            })
    };
};