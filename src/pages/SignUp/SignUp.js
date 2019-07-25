import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {SIGN_UP} from '../../actions/types';
import './SignUp.scss';




class SignUp extends Component {

    onSignUpSubmit = (e) => {
        e.preventDefault();
        e.persist();
        this.props.dispatch({
            type:SIGN_UP,
            payload:{
                username: e.target[0].value,
                password: e.target[1].value,
                email: e.target[2].value,
                code: e.target[3].value,
            }
        })
    };

    render() {
        return <div className="signin-container">
            <div>
                <form onSubmit={(e) => {
                    this.onSignUpSubmit(e)
                }}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="userName" placeholder="Uername"
                               required></input>
                    </div>
                    <div className="form-group">
                        <input type="password" class="form-control" id="password" placeholder="Password"
                               required></input>
                    </div>
                    <div className="form-group">
                        <input type="email" class="form-control" id="email" placeholder="Email" required></input>
                    </div>
                    <div className="form-group">
                        <input type="text" class="form-control" id="referralCode" placeholder="Referral code"
                               required></input>
                    </div>
                    <div>
                        <button type="submit" name="signIn" class=" btn btn-info signup-btn">Sign Up</button>
                    </div>
                </form>
            </div>
            <div class="signup-options-container">
                <NavLink to="/signIn" className="signup-link">Sign In</NavLink>
                <NavLink to="/forgotpassword" className="forgot-password-link">Forgot</NavLink>

            </div>
        </div>
    }
}

const mapDispatchToProps =dispatch=>{
    return {dispatch}
};


export default connect(null, mapDispatchToProps)(SignUp);
