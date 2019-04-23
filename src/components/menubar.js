import React, { Component } from 'react';
import logo from '../img/logo.png';
class MenuBar extends Component {
    render() {
        const displayNone = {
            display:'none'
        };
        return (
            <div id="menu" className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header visible-xs">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"><h2>Meat King</h2></a>
            </div>
        <div id="navbar" className="navbar-collapse collapse">
            <div className="hidden-xs" id="logo"><a href="#header">
                <img src="img/logo.png" alt="" />
            </a></div>

            <ul className="nav navbar-nav navbar-right">
                <li><a href="#story">Story</a></li>
                <li><a href="#reservation">Reservation</a></li>
                <li><a href="#chefs">Our Chefs</a></li>

                
                <li><a href="#facts">Facts</a></li>
                <li><a href="#food-menu">Food Menu</a></li>
                <li><a href="#special-offser">Special Offers</a></li>
                <li style={displayNone}><a href="#header"></a></li>

            </ul>
        </div>
        </div>
    </div>
        );
    }
}

export default MenuBar;