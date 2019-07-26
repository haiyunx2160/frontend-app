import {
    TOKEN,
    LOGOUT,
    SIGN_UP_SUCCESSFUL,
    SIGN_IN_SUCCESSFUL,
    SIGN_IN_FAILED,
    SIGN_UP_FAILED
} from '../actions/types';

const initialState = {
    authenticated: false,
    userInfo:{},
    error:false
};

export default function userReducer (state = initialState, action) {

    switch (action.type) {
        case SIGN_UP_SUCCESSFUL:
            return  {authenticated:true, userInfo:action.payload, error:false};

        case LOGOUT:
            localStorage.clear();
            return {authenticated: false, userInfo:{}, error:false};
        case SIGN_IN_SUCCESSFUL:
            return {authenticated:true, userInfo:action.payload, error:false};
        case SIGN_IN_FAILED:
            return {authenticated:false, userInfo:{}, error:true};
        case SIGN_UP_FAILED:
            return {authenticated:false, userInfo:{}, error:true};
        default:
            return state;
    }
}
