import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if (!localStorage.getItem('login')) {
                this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.auth) {
                this.props.history.push('/login');
            }
        }

        PropTypes = {
            router: PropTypes.object,
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {auth: state.access.auth};
    }

    return connect(mapStateToProps)(Authentication);
}