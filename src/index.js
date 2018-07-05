import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import React from "react";
import Header from './containers/Header';
import Main from './containers/Main';
import NewsPage from './containers/NewsPage';
import Profile from './containers/Profile';
import Access from './containers/Access';
import requireAuth from './containers/hoc/require_auth';

import { BrowserRouter, Route} from "react-router-dom";
//const $ = window.jQuery


const store = configureStore()

render(
        <Provider store={store}>
            <BrowserRouter>
                <div className="container main">   
                    <Header /> 
                    <Route exact path="/" component ={Main}  />           
                    <Route path="/news" component ={NewsPage}  />  
                    <Route path="/profile" component={requireAuth(Profile)}/>           
                    <Route path="/login" component ={Access}  />  
                </div>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
        )