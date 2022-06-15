import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'

import { fetchWrapper } from '../helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `http://api.tsdmotoboys.com.br/cliente`;
const clienteSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('cliente')));

export const clienteService = {
    cliente: clienteSubject.asObservable(),
    get clienteValue () { return clienteSubject.value },
    getAll
};

function getAll() {
    return fetchWrapper.get(baseUrl);
}