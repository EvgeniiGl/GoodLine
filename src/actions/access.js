import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../constants/actionTypes';
import { USERNAME, PASSWORD} from '../constants/properties';

export const  login = (values, history) => {
    if (USERNAME === values.login && PASSWORD === values.pass) {
        localStorage.setItem('login', true);
        history.push('/profile');
        return {type: AUTHENTICATED};
    } else {
        return {type: AUTHENTICATION_ERROR,
            msg: "Имя пользователя или пароль введены не верно"
        };
    }
}

export const exit = (history) => {
    localStorage.clear();
    return {
        type: UNAUTHENTICATED
    };
}



