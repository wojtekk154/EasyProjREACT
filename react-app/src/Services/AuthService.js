import * as urls from '../utils/constats';

class AuthService {
    signUpNewUser(data) {
        console.log(data);
        return fetch(urls.REGISTER_USER_URL, {
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
            method: 'POST'
        })
            .then(resp => resp.json());
    }

    signInUser(credentials) {

    }
}

export default AuthService;