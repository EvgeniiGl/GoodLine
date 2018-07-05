import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Menu from './menu';
import {news_list} from './news_page';
import Access from './access';

const allReducers = combineReducers({
    menu: Menu,
    news_list: news_list,
    access: Access,
    form: formReducer
})

export default allReducers;