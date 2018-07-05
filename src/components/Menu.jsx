import React, { Component} from "react";
import { Link} from "react-router-dom";
import PropTypes from 'prop-types';

class Menu extends Component {

    static propTypes = {
        menu: PropTypes.array.isRequired
    };

    render() {
        return (
                this.props.menu.map((item, i) =>
                    <Link
                        key={i} 
                        to={item.link} 
                        >
                    {item.label}
                    </Link>
                )
                )
    }
}

export default Menu;