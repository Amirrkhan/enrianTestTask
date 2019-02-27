import React, { Component } from 'react';

import Icon from '../../functions/svgIcon'

class sidenav extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="navigation__item">
                </div>
                <div className="navigation__item navigation__item--active">
                    <div className="navigation__icon" >
                        <Icon icon='application'/>
                    </div>
                    <div className="navigation__text">
                        Applications
                    </div>
                </div>
                <div className="navigation__item ">
                    <div className="navigation__icon" >
                        <Icon icon='services'/>
                    </div>
                    <div className="navigation__text">
                        Services
                    </div>
                </div>

                <div className="navigation__item ">
                    <div className="navigation__icon" >
                        <Icon icon="devices"/>
                    </div>
                    <div className="navigation__text">
                        Devices
                    </div>
                </div>
                

                <div className="navigation__item ">
                    <div className="navigation__icon" >
                        <Icon icon="devices-relationships"/>
                    </div>
                    <div className="navigation__text">
                        Devices Relationships
                    </div>
                </div>
            </div>
        );
    }
}

export default sidenav;