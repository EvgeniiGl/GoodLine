import { GOTO_NEWS,FETCH_ALL_NEWS } from '../constants/actionTypes';


export const  goto_news = (id_news) => {
        return {
            type: GOTO_NEWS,
            id_news:id_news
        };
    
}


export const fetchAllNews = () =>{
    return  {
        type: FETCH_ALL_NEWS}
}