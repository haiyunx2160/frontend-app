import {put, takeLatest, call} from 'redux-saga/effects';
import axios from 'axios';
import {
    SIGN_IN,
    SIGN_IN_SUCCESSFUL,
    SIGN_IN_FAILED
} from '../actions/types';

const postData = (payload) => {
    return axios.post('http://178.128.233.31/frontend/login', payload);
};

function* setToken(action) {

    try {
        const response = yield call(postData, action.payload);
        console.log(response)
        localStorage.setItem("userId", response.data.ref_code);
        if (response) {
            yield put({type: SIGN_IN_SUCCESSFUL, payload: response.data});
        }
    } catch (err) {

        if (err) {
            yield put({type: SIGN_IN_FAILED, payload: err});
        }
    }

}

export function* getTokenSaga() {
    yield takeLatest(SIGN_IN, setToken)
}
