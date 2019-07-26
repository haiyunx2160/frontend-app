import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Dashboard.scss';
import {connect} from "react-redux";

import { LeftSidebar, TransferModal, DoughnutChart, LineChart, ChartTable, TransactionTable, Footer } from './../../components';


class Dashboard extends Component{

    componentWillUnmount() {
        alert('Successfully logged out!')
    }

    render(){

        if (!this.props.authenticated) return <Redirect to={'/signin'} />
         return (
            <div className="dashboard-container">
                <div className="navigation">
                    <LeftSidebar/>
                </div>
                <div className="content-wrapper" id="content-div">
                    <div className="overview-container">
                        <div className="overview-table"><ChartTable/></div>
                        <div className="overview-graph"><DoughnutChart /></div>
                    </div>
                    <div className="graph-container"><LineChart /></div>
                    <div className="table-container"><TransactionTable /></div>
                    <div className="transfer-modal-container"><TransferModal/></div>
                    <div className="footer-container"><Footer/></div>
                </div>
            </div>
        );
    }



}

const mapStateToProps= (state)=>{
    return {
        authenticated:state.UserStore.authenticated
    }
};

export default connect(mapStateToProps)(Dashboard);
