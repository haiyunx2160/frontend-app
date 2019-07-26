import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {SIGN_IN_FAILED, SIGN_UP, SIGN_UP_SUCCESSFUL} from "../actions/types";


function* onUserSignUp(action) {

try {
    const response = yield call(axios.post, "http://178.128.233.31/frontend/signup", action.payload);
    const data = response.data;
    yield put({type:SIGN_UP_SUCCESSFUL});
    localStorage.setItem("userId", data.ref_code);
    localStorage.setItem("res_message", data.code);
}

catch (err) {
    yield put({type:SIGN_IN_FAILED});
}


}

export function* userSignUp() {
    yield takeLatest(SIGN_UP, onUserSignUp)
}
