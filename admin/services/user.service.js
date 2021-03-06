import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'

import { fetchWrapper } from '../helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    logout,
    getAll
};

function login(username, password) {
    return fetchWrapper.post(`http://api.tsdmotoboys.com.br/cliente/login`, { email: username, senha: password })
        .then(user => {
            console.log("user", user);
            // publish user to subscribers and store in local storage to stay logged in between page refreshes
            userSubject.next(user);
            console.log("value", userSubject.value);
            localStorage.setItem('user', JSON.stringify(user));
            console.log(localStorage.getItem('user'));
            return user;
        });
}

function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/login');
}

function getAll() {
    return fetchWrapper.get(baseUrl);
}