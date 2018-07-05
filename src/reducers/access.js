import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../constants/actionTypes';

const initialState = {
    auth: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATED:
            return {...state, auth: true};
        case UNAUTHENTICATED:
            return {...state, auth: false};
        case AUTHENTICATION_ERROR:
            return {...state, error: action.msg};
        default:
            return state;
}
}
