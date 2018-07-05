import React, { Component} from "react";
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {exit} from "../actions/access";

import Menu from '../components/Menu';


class Header extends Component {

    btnExit() {
        if (localStorage.getItem('login')) {
            return  <div className="signout">
                <Link to="/login"
                      onClick={ this.exit} >
                Выход
                </Link>
            </div>
        }
    }
    exit = (e) => {
        e.preventDefault();
        this.props.signOut(this.props.history);
    }

    render() {
        return (
                <div className="header">
                    <div className="menu">
                        <Menu menu={this.props.menu}/>
                    </div>
                    {this.btnExit()}   
                </div>
                );
    }
}


function mapStateToProps(state) {
    return {
        menu: state.menu
    };
}


function mapDispatchToProps(dispatch) {
    return {
        signOut: bindActionCreators(exit, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);