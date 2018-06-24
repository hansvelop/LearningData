import React, { Component } from 'react';
import '../../styles/components/main/dashboard.scss';
import SideMenu from "../../components/frame/SideMenu/SideMenu";

class Dashboard extends Component {
    render() {
        return (
            <div className={'main-wrapper'}>
                <SideMenu />
                <div>
                    content <br />
                </div>
            </div>
        );
    }
}

export default Dashboard;
