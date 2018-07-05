import React, { Component} from "react";
import PropTypes from 'prop-types';

class News extends Component {

    static propTypes = {
        news: PropTypes.object,
    }

    render() {
        if(!this.props.news){
            return <div>Новость не найдена</div>
        }
        const news = this.props.news
        return (
                <div className="main">
                    <div className="news">
                        <div key={news.id}>
                            <img src={news.img} alt="картинка" />
                            <h3>{news.title}</h3>
                            <p>{news.text}</p>  
                        </div>
                    </div>
                </div>
                );


    }
}


export default News;
