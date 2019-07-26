import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";

import './ForgotPassword.scss';
import {REST_PASSWORD} from "../../actions/types";


class ForgotPassword extends Component {

    constructor() {
        super();
        this.state = {
            done:false
        };
    }

    onSubmit=(e)=>{
        this.setState({done:true})
        e.preventDefault();
        e.persist();
        this.props.dispatch({
            type: REST_PASSWORD,
            payload: {
                username: e.target[0].value,
            }
        })
    };

    handleChange=()=>{
        this.setState({done:false})
    };

  render(){
    return <div className="signin-container">
        <div >
          <form onSubmit={(e)=>{this.onSubmit(e)}}>
            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Email" onChange={this.handleChange} required/>
            </div>
            <div >
              <button type="submit" name="signIn" className=" btn btn-info fogotpwd btn">Forgot Password</button>
            </div>
          </form>
            {this.state.done? (
                <div>
                    <small>{this.props.error?"failed to send email, please try again":'Reset email send successfully, please check your mailbox'}</small>
                </div>
            ) : null}
        </div>
        <div className="signup-options-container">
          <NavLink to="/signIn" className="signup-link">Sign In</NavLink>
          <NavLink to="/signUp" className="forgot-password-link">Sign Up</NavLink>

        </div>
      </div>
  }
}

const mapStateToProps =state=>{
    return{
        error: state.UserStore.error
    }
}

const mapDispatchToProps =dispatch=>{
    return{dispatch}
};
export default connect(null, mapDispatchToProps)(ForgotPassword);
