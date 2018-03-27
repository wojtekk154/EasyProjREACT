import * as urls from '../utils/constats';

class AuthService {
    signUpNewUser(data) {
        return fetch(urls.REGISTER_USER_URL, {
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
            method: 'POST'
        })
            .then(resp => resp.json());
    }

    signInUser(credentials) {
        return fetch(urls.LOGIN_USER_URL, {
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: credentials.email, password: credentials.password}),
            method: 'POST'
        })
            .then(resp => resp.json());
    }
}

export default AuthService;