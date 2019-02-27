import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to='/' className="header__item header__logo">
                    <div className=" icon icon--logo icon--size-large"/>    
                    <span className="header__text">Internship <br/> project</span>
                </Link>
                <div className="header__item header__user">
                    <span className="header__text"> User name </span>
                    <div className="icon icon--avatar" style={{width: '52px', height:'52px'}}/>
                    <div className="icon icon--arrow-down" style={{width: '12px', height:'7px'}}/>
                </div>
            </div>
        );
    }
}

export default Header;