import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    FETCH_TOKEN,
    TOKEN,
    TOKEN_FAILED,
    SET_USER_ID,
 } from '../actions/types';



function* setToken(action) {
    try {
        const request =yield call(axios.post,'http://178.128.233.31/frontend/login')
        localStorage.setItem("userId", 'fakeUserId');
        localStorage.setItem("token", 'fakeToken');
        // yield put({ type: SET_USER_ID, response.userId });
        // yield put({ type: TOKEN, response.token });
    }
    catch(error) {
        console.error(error)
        yield put({ type: TOKEN_FAILED, error });
    }
}

export function* getTokenSaga() {
    yield takeLatest(FETCH_TOKEN, setToken)
}
