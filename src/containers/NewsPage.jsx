import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsList from '../components/NewsList';
import News from '../components/News';
import {bindActionCreators} from 'redux';
import {goto_news, fetchAllNews} from '../actions/news_page';
import { Switch, Route } from 'react-router-dom'
import queryString from 'query-string';

class NewsPage extends Component {
    constructor(props) {
        super(props);
        this.props.fetchAllNews()
    }
    onSelectNews = (id_news) => {
        this.props.goto_news(id_news)
    }
    
    render() {    
        return (
          <Switch>
                    <Route exact path="/news" 
                    render={() => (
                            <NewsList news_list={this.props.news_list} 
                      selectNews={this.onSelectNews}
                      page={queryString.parse(this.props.location.search).page||1}
                        history = {this.props.history}  per_page = {this.props.per_page}   
                                     /> 
                            
                )}
                     />  
                    <Route path="/news/:id_news([0-9]+)" 
                    render={() => ( 
                            <News news={this.props.news} />
                            )}
                />  
        </Switch>
                );
    }
}
function mapStateToProps(state) {
    return {
        news_list: state.news_list.list,
        news: state.news_list.list[state.news_list.id_news],
        per_page: state.news_list.per_page
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({goto_news, fetchAllNews}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)