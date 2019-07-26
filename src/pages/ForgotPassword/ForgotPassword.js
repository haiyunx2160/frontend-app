import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";

import './ForgotPassword.scss';
import {REST_PASSWORD} from "../../actions/types";


class ForgotPassword extends Component {

    onSubmit=(e)=>{
        e.preventDefault();
        e.persist();
        this.props.dispatch({
            type: REST_PASSWORD,
            payload: {
                username: e.target[0].value,
            }
        })
    };

  render(){
    return <div className="signin-container">
        <div >
          <form onSubmit={(e)=>{this.onSubmit(e)}}>
            <div className="form-group">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div >
              <button type="submit" name="signIn" className=" btn btn-info fogotpwd btn">Forgot Password</button>
            </div>
          </form>
        </div>
        <div className="signup-options-container">
          <NavLink to="/signIn" className="signup-link">Sign In</NavLink>
          <NavLink to="/signUp" className="forgot-password-link">Sign Up</NavLink>

        </div>
      </div>
  }
}

const mapDispatchToProps =dispatch=>{
    return{dispatch}
};
export default connect(null, mapDispatchToProps)(ForgotPassword);
