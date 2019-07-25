import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {SIGN_UP, TOKEN} from "../actions/types";


function* onUserSignUp(action) {

try {
    const response = yield call(axios.post, "http://178.128.233.31/frontend/signup", action.payload);
    const data = response.data;
    yield put({type:TOKEN});
    localStorage.setItem("userId", data.ref_code);
    localStorage.setItem("res_message", data.code);
}

catch (err) {
    localStorage.setItem("res_message", err);
}


}

export function* userSignUp() {
    yield takeLatest(SIGN_UP, onUserSignUp)
}
