import React, { Component } from 'react';
class Facts extends Component {
    render() {
        return (
            <div id="facts" className="parallax parallax2 facts">
        <div className="container inner">
            <div className="row text-center services-3">
                <div className="col-sm-3">
                    <div className="col-wrapper">
                    <div className="icon-border bm10"> <i className="fa fa-beer"></i> </div>
                    <h4>796518</h4>
                    <p>Mug of Beer Sold</p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="col-wrapper">
                    <div className="icon-border bm10"> <i className="fa fa-play-circle-o"></i> </div>
                    <h4>39472</h4>
                    <p>Movies Watched</p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="col-wrapper">
                    <div className="icon-border bm10"> <i className="fa fa-truck"></i> </div>
                    <h4>2188764</h4>
                    <p>Pizza Deleverd</p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="col-wrapper">
                    <div className="icon-border bm10"> <i className="fa fa-users"></i> </div>
                    <h4>480523</h4>
                    <p>Customers Worldwide</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
        );
    }
}

export default Facts;