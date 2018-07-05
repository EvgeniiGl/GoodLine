import React, { Component} from "react";
import { Link} from "react-router-dom";
import PropTypes from "prop-types";
import { Pagination } from "react-bootstrap";

class NewsList extends Component {

    static propTypes = {
        news_list: PropTypes.object.isRequired
    }

    render() {
//pagination data       
        const per_page = this.props.per_page;
        const current_page = Number(this.props.page)
        const start_offset = (current_page - 1) * per_page;
        const news_list = this.props.news_list;
        const keys_news_list = Object.keys(news_list);
        const pages = Math.ceil(keys_news_list.length / per_page);
        const prev_page = (current_page === 1) ? 1 : current_page - 1
        const next_page = (current_page === pages) ? pages : current_page + 1
//news_list
        const newsList = keys_news_list.slice(start_offset, start_offset + per_page)
                .map((item, index) => {
                    return (
                            <div key={news_list[item].id}>
                                <img src={news_list[item].img} alt="картинка" />
                                <h3>{news_list[item].title}</h3>
                                <p>{news_list[item].text}</p>   
                                <Link to={{
                                    pathname: '/news/' + news_list[item].id,
                                    state: {
                                        select_news: true,
                                        id_news: news_list[item].id
                                      }           
                                      }}
                                      onClick={() => this.props.selectNews(news_list[item].id)} >
                                Читать новость
                                </Link>
                            </div>
                                    )
                        })
//pagination
                        const numbers = [...Array(pages).keys()].map((number, index) => {
                            number++;
                            return <Pagination.Item key={index} active={number === current_page}
                                             onClick={() => {
                                                                this.props.history.push('/news?page=' + number)
                                                         }}
                                             > 
                                {number}
                            </Pagination.Item>

                        })
                        return (
                                <div className="main">
                                    <div className="news">
                                        {newsList}
                                    </div>
                                    <Pagination>
                                        <Pagination.First onClick={() => this.props.history.push('/news?page=1')} />
                                        <Pagination.Prev onClick={() => this.props.history.push('/news?page=' + prev_page)} />
                                        {numbers}
                                        <Pagination.Next  onClick={() => this.props.history.push('/news?page=' + next_page)} />
                                        <Pagination.Last  onClick={() => this.props.history.push('/news?page=' + pages)}/>
                                    </Pagination>  
                                </div>
                                );
                    }
                }


                export default NewsList;

//отрисовать модуль Pagination  
//const {page, total, renderedUsers} = this.state;                   
//  <Pagination
                //  margin={//2}
                //   page={//page}
                //   count={//Math.ceil(total / 2)}
                //   onPageChange={//this.handlePageChange}
                       