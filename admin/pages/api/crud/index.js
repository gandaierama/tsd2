import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

export const crudService = {
    post,
    get,
    list,
    _delete,
    put
};

function get (url) {
    const requestOptions = {
        method: 'GET',
        headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT'}
    };
    let res;
    try {
        // code that we will 'try' to run
        const res= fetch(url, requestOptions).then(handleResponse);
        return res;
    } catch(error) {
      // code to run if there are any problems
      console.log(error);
     
    }
    return res;
}
function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        credentials: 'include',
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);    
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(url)
    };
    return fetch(url, requestOptions).then(handleResponse);
}
