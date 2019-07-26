import React, { Component } from 'react';
import './Footer.scss';
import {connect} from "react-redux";
import {LOGOUT} from "../../actions/types";

class Footer extends Component {

    onLogOut=()=>{
        this.props.dispatch({type:LOGOUT});
    };

    render(){
        return (
                <div className="footer-control">
                    <div className="footer-filter">
                        <div>Dashboard</div>
                        <div>Affiliates</div>
                        <div>Stats</div>
                        <div>Exchange</div>
                        <div>Contact</div>
                        <div onClick={()=>this.onLogOut()}>Logout</div>
                        <div>Referral Code</div>
                    </div>
                </div>
            
        );
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {dispatch}
}
export default connect(null,mapDispatchToProps)(Footer);
