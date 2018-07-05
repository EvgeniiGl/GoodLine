import React, { Component} from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from  '../actions/access';

class Access extends Component { 

    submit = (values) => {
        this.props.login(values, this.props.history);
    }

    errorMessage() {
        if (this.props.errorMessage) {
            return (
                    <div className="info-red">
                        {this.props.errorMessage}
                    </div>
                    );
        }
    }

    render() {
        const {handleSubmit} = this.props;
        return (
                <div className="form">
                    <div className="container">
                        <h2>Вход</h2>
                        <form onSubmit={ handleSubmit(this.submit) }>
                            <Field name="login"
                                   component="input"
                                   type="text"
                                   placeholder="Логин" 
                                   />
                            <Field name="pass" 
                                   component="input"
                                   type="password" 
                                   placeholder="Пароль" 
                                   />
                            <button type="submit">Войти</button>
                        </form>
                        {this.errorMessage()}
                    </div>
                </div>
                );
    }
}
function mapStateToProps(state) {
    return {errorMessage: state.access.error};
}

const reduxFormSignin = reduxForm({
    form: 'login'
})(Access);

export default connect(mapStateToProps, {login})(reduxFormSignin);