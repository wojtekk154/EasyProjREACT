function required(value) {
    return value ? [] : ['This field cannot be empty'];
}
function password(value) {
    return !(/^[!@#$%\^&*)(+=._-]*$/).test(value) ? []: ['Password has incorrect signs!'];
}

function passwordAggrements(value1, value2) {
    return value1 === value2 ? [] :  ['Passwords are not the same! Correct passwords!'];
}
function email(value) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(value);
}

export const validators = { required, email, password, passwordAggrements};