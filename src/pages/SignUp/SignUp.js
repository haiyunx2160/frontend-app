import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {SIGN_UP} from '../../actions/types';
import './SignUp.scss';


class SignUp extends Component {


    onSignUpSubmit = (e) => {
        e.preventDefault();
        e.persist();
        this.props.dispatch({
            type: SIGN_UP,
            payload: {
                username: e.target[0].value,
                password: e.target[1].value,
                email: e.target[2].value,
                code: e.target[3].value,
            }
        })

    };

    renderResponseMessage = (uid) => {
        if (uid) {
            return <small style={{color: 'green'}}>'Sign up Successful'</small>
        }
    }

    handleChange =(e)=>{
        e.persist();
       console.log(e.target.value)
    }

    render() {

        if (this.props.authenticated) return <Redirect to={'/dashboard'}/>
        return <div className="signin-container">
            <div>
                <form onSubmit={(e) => {
                    this.onSignUpSubmit(e)
                }} onChange={(e)=>this.handleChange(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="userName" placeholder="Uername"
                               required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" placeholder="Password"
                               required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="referralCode" placeholder="Referral code"
                               required />
                    </div>
                    <small id='error' style={{display: this.props.error ? 'inline' : 'none', color: 'red'}}>Failed to sign up,
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
