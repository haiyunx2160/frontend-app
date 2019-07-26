import {put, takeLatest, call} from 'redux-saga/effects';
import axios from 'axios';
import {REST_PASSWORD,
    REST_PSWD_FAIL,
    REST_PSWD_SUCCESS} from '../actions/types';

const postData = (payload) => {
    return axios.post('http://178.128.233.31/frontend/reset_password', payload);
};

function* setToken(action) {

    try {
        const response = yield call(postData, action.payload);
        console.log(response)
        if (response) {
            yield put({type: REST_PSWD_SUCCESS, payload: response.data});
        }
    } catch (err) {

        if (err) {
            yield put({type: REST_PSWD_FAIL, payload: err});
        }
    }

}

export function* getTokenSaga() {
    yield takeLatest(REST_PASSWORD, setToken)
}
