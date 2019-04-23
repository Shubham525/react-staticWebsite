import React, { Component } from 'react';
import logo from '../img/logo.png';
class Header extends Component {
    render() {
        return (
            <div id="header">
        <div className="bg-overlay"></div>
        <div className="center text-center">
            <div className="banner">
                <h1 className="">Meat King</h1>
            </div>
            <div className="subtitle"><h4>AWESOME RESTAURANT THEME</h4></div>
        </div>
        <div className="bottom text-center">
            <a id="scrollDownArrow" href="#"><i className="fa fa-chevron-down"></i></a>
        </div>
    </div>
        );
    }
}

export default Header;