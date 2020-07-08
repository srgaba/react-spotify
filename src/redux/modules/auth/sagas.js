import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../util/api';
import history from '../../../util/history';

import Reactotron from 'reactotron-react-js'

import { signInSucess } from './actions';

export function* signIn({ payload })
{
    try{
        const { email, password } = payload;

        const response = yield call(api.post, 'session/login', {
            email: email, 
            password: password
        });

        const { token, user } = response.data;
    
        api.defaults.headers['Authorization'] = `Bearer ${token}`
    
        yield put(signInSucess(token, user));
    
        history.push('/home');
    }catch(err)
    {
        
    }
}

export function setToken({ payload })
{
    if(!payload) return;

    const { token } = payload.auth;

    api.defaults.headers['Authorization'] = `Bearer ${token}`
}


export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn)
]);


