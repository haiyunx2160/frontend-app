import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {SIGN_UP} from '../../actions/types';
import './SignUp.scss';

const initialState = {
    userName: '',
    password: '',
    email: '',
    referralCode: '',
    usernameError: '',
    passwordError: '',
    emailError: '',
    referralCodeError: ''
};

class SignUp extends Component {

    state = initialState;

    onSignUpSubmit = (e) => {
        e.preventDefault();
        e.persist();

        if(this.validate()){
            this.props.dispatch({
                type: SIGN_UP,
                payload: {
                    username: e.target[0].value,
                    password: e.target[1].value,
                    email: e.target[2].value,
                    code: e.target[3].value,
                }
            })

            this.state = initialState;
        }

    };
    handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        this.setState({[name]: value})


    };

    validate = () => {
        let usernameError = '';
        let passwordError = '';
        let emailError = '';
        let referralCodeError = '';

        if(this.state.userName===''){
            usernameError = 'Username is empty';
            this.setState({usernameError:usernameError});
            return false;
        }

        if(this.state.password===''){
            passwordError = 'Password is empty';
            this.setState({passwordError:passwordError});
            return false;
        }

        if(this.state.email===''){
            emailError = 'Email is empty';
            this.setState({emailError:emailError});
            return false;
        }

        if(this.state.referralCode===''){
            referralCodeError = 'Referral code is empty';
            this.setState({referralCodeError:referralCodeError});
            return false;
        }

        return true;
    };

    render() {

        if (this.props.authenticated) return <Redirect to={'/dashboard'}/>
        return <div className="signin-container">
            <div>
                <form onSubmit={(e) => {
                    this.onSignUpSubmit(e)
                }} onChange={(e) => this.handleChange(e)}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="userName"
                               value={this.state.username}
                               placeholder="Uername"
                               onChange={this.handleChange}
                               required/>
                    </div>
                    <div>{this.state.usernameError}</div>
                    <div className="form-group">
                        <input type="password"
                               className="form-control"
                               name="password"
                               value={this.state.username}
                               placeholder="Password"
                               onChange={this.handleChange}
                               required/>
                    </div>
                    <div>{this.state.passwordError}</div>
                    <div className="form-group">
                        <input type="email"
                               className="form-control"
                               name="email"
                               value={this.state.username}
                               placeholder="Email"
                               onChange={this.handleChange}
                               required/>
                    </div>
                    <div>{this.state.emailError}</div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="referralCode"
                               value={this.state.username}
                               placeholder="Referral code"
                               onChange={this.handleChange}
                               required/>
                    </div>
                    <div>{this.state.referralCodeError}</div>
                    <small id='error' style={{display: this.props.error ? 'inline' : 'none', color: 'red'}}>Failed to
                        sign up,
                        please try again
                    </small>
                    <div>
                        <button type="submit" name="signIn" className=" btn btn-info signup-btn">Sign Up</button>
                    </div>
                </form>
            </div>
            <div className="signup-options-container">
                <NavLink to="/signIn" className="signup-link">Sign In</NavLink>
                <NavLink to="/forgotpassword" className="forgot-password-link">Forgot</NavLink>

            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.UserStore.authenticated,
        error: state.UserStore.error
    }
}


const mapDispatchToProps = dispatch => {
    return {dispatch}
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
