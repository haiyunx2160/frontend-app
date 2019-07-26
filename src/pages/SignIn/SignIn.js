import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchToken} from '../../actions/signInActions';
import {NavLink, Redirect} from 'react-router-dom';

import './SignIn.scss';
import {SIGN_IN} from "../../actions/types";

class SignIn extends Component {

    onSignUpSubmit = (e) => {
        e.preventDefault();
        e.persist();
        this.props.dispatch({
            type: SIGN_IN,
            payload: {
                username: e.target[0].value,
                password: e.target[1].value,
            }
        })
    };


    render() {

        if (this.props.authenticated) return <Redirect to={'/dashboard'}/>;
        return (
            <div className="signin-container">
                <div>
                    <form onSubmit={(e) => {
                        this.onSignUpSubmit(e)
                    }}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="userName" placeholder="Username"
                                   required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="Password"
                                   required />
                        </div>
                        <small style={{display:this.props.error?'inline':'none', color:'red'}}>Wrong user name or password, please try again</small>
                        <div>
                            <button type="submit" name="signIn" className="btn btn-info signin-btn">Login</button>
                        </div>
                    </form>
                </div>
                <div className="signup-options-container">
                    <NavLink to="/signup" className="signup-link">Sign Up</NavLink>
                    <NavLink to="/forgotpassword" className="forgot-password-link">Forgot</NavLink>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        authenticated: state.UserStore.authenticated,
        error:state.UserStore.error
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)
