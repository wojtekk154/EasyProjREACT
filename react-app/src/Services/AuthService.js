import * as urls from '../utils/constats';

class AuthService {
    signUpNewUser(data) {
        return fetch(urls.REGISTER_USER_URL, {
            body: JSON.stringify(data),
            method: 'POST'
        })
            .then(resp => resp.json())
            .then(data => data)
            .catch(e => console.log(e));
    }

    signInUser(credentials) {

    }
}

export default AuthService;