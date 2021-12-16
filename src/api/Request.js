

import { API_URL } from "@env";

let _token = null;

export const setToken = (token) => {
    _token = token;
}

export const _get = (path, params) => {
    return _req('GET', path, params);
}

export const _post = (path, params) => {
    return _req('POST', path, params);
}

export const _put = (path, params) => {
    return _req('PUT', path, params);
}

export const _del = (path, params) => {
    return _req('DELETE', path, params);
}

const _req = async (method = 'GET', path, params) =>{
    const paramIsFormData = params instanceof FormData;

	let options = {
		method,
        headers: {},
	}

    if(method == 'POST' || method == 'PUT'){
        if(!paramIsFormData){
            options.headers = {
                ...options.headers,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
        }

        if(params){
            if(paramIsFormData){
                options.body = params;
            }else{
                options.body = JSON.stringify(params);
            }
        }
    }else if(method == 'GET'){
        options.headers = {
            ...options.headers,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        
        if(params) {
            path += (path.indexOf('?') === -1 ? '?' : '&') + buildQueryString(params);
        }
    }

    // Token-based Authentication
    if(_token){
        options.headers['Authorization'] = `Bearer ${_token}`;
    }

    const result = await fetch(`${API_URL}${path}`, options);
    const fetchData = await checkWithJson(result);
    return new Promise((resolve, reject) => {
        result.ok ? resolve(fetchData) : reject(fetchData);
    });
}

const checkWithJson = async (val) => {
    try{
        return await val.json()
    }catch(e){
        return val.statusText;
    }
}

function buildQueryString(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}