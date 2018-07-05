import {mock_list_news} from '../mock_data';
import { GOTO_NEWS, FETCH_ALL_NEWS } from '../constants/actionTypes';
import { PER_PAGE } from '../constants/properties';

const initialState = {
    id_news: Number(window.location.pathname.substr(window.location.pathname.lastIndexOf("/") + 1)),
    per_page: PER_PAGE,
    list: {}
}

export const news_list = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_NEWS:
            let list = {}
            for (let news of mock_list_news) {
                list = {
                    ...list,
                    [news.id]: news
                }
            }
            return {...state, list};
        case GOTO_NEWS:
            return {...state, id_news: action.id_news};
        default:
            return state;
}
}
