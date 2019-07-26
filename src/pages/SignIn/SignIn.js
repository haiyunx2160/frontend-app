import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchToken} from '../../actions/signInActions';
import {NavLink, Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";


import './SignIn.scss';
import {SIGN_IN} from "../../actions/types";

class SignIn extends Component {

    constructor() {
        super();
        this.state = {done:false};
    }

    onSignUpSubmit = (formValues) => {
        this.setState({done:true})
        this.props.dispatch({
            type: SIGN_IN,
            payload: {
                username: formValues.username,
                password: formValues.password
            }
        });
    };

    formOnChange =()=>{
        this.setState({done:false})
    };

    renderError = ({error, touched}) => {
        this.state = {done:false};
        if (touched && error) {
            return (
                <small className='alert alert-danger'>{error}</small>
            )
        }
    };

    renderInput = (formProps) => {
        return (

            <div className='form-group'>
                <input  {...formProps.input}
                        className='form-control'
                        autoComplete='off'
                        type={formProps.type}/>
                {this.renderError(formProps.meta)}
            </div>
        )
    };


    render() {

        if (this.props.authenticated) return <Redirect to={'/dashboard'}/>;
        return (
            <div className="signin-container">
                <div>
                    <form onSubmit={this.props.handleSubmit(this.onSignUpSubmit)} onChange={this.formOnChange}>
                        <Field name='username'
                               type='text'
                               placeholder='Username'
                               component={this.renderInput}/>

                        <Field name='password'
                               type='password'
                               component={this.renderInput}/>

                        <div>

                        </div>
                        <div>
                            <button type="submit" name="signIn" className="btn btn-info signin-btn">Login</button>
                        </div>
                    </form>
                    {this.state.done? (
                        <div>
                            <small style={{color:'red'}}>{this.props.error?"Wrong user name or password, please try again":null}</small>
                        </div>
                    ) : null}
                </div>
                <div className="signup-options-container">
                    <NavLink to="/signup" className="signup-link">Sign Up</NavLink>
                    <NavLink to="/forgotpassword" className="forgot-password-link">Forgot</NavLink>
                </div>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errs = {};
    if (!formValues.username) {
        errs.username = 'Username can not be empty'
    }
    if (!formValues.password) {
        errs.password = 'Password can not be empty'
    }

    return errs;
};

function mapStateToProps(state) {
    return {
        authenticated: state.UserStore.authenticated,
        error: state.UserStore.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fetchToken,
            },
        ),
        dispatch: dispatch
    }
}


const signinForm = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default reduxForm({
    form: 'signin_form',
    validate

})(signinForm)
