import React, { Component } from 'react';

// import components
import Header from '../../components/Header/header'
import SideNav from '../../components/SideNav/sidenav'

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Header/>
                <SideNav/>
                <div className="layout__content ">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;