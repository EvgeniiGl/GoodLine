import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
    render() {
        return (
                <div className="container">
                    <h1>Глечиков Евгений Александрович</h1>
                    <div>
                        <p>Мужчина, 34 года, родился 17 декабря 1983
                            Новокузнецк, готов к переезду, готов к редким командировкам</p>
                        <hr />
                        <span>+7 (951) 164-00-57</span>
                        <div>
                            <hr />
                            <a>geka_nkz@mail.ru</a>
                        </div>
                        <hr />
                        <div>Разработчик (ВЕБ-ПРОГРАММИСТ) - 75 000 руб.</div>
                      <hr />
                        <div>
                            График работы: гибкий график, полный день, вахтовый метод, удаленная работа</div>
                    </div>
                    <hr />
                    <div>
                        6 лет самостоятельно изучаю PHP, Zend Framework 2, JAVA SCRIPT, JQUERY,
                        VUEJS, Git, React, что говорит об искренней увлеченности профессией и желании развиваться. 
                        В данный момент разрабатываю свой проект для организации бизнес процессов
                        испытательной лаборатории (CRM, документооборот, регистрация журналов,
                        формирование готовых документов и т. д.) на базе ZF2. </div>
                </div>
                );
    }
}


function mapStateToProps(state) {
    return {
        access: state.access
    };
}


export default connect(mapStateToProps )(Profile);