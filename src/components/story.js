import React, { Component } from 'react';
class Story extends Component {
    render() {
        return (
            <div id="story" className="light-wrapper">
            <section className="ss-style-top"></section>
            <div className="container inner">
                <h2 className="section-title text-center">Our Story</h2>
                <p className="lead main text-center">We're cooking delecious foods since 1879</p>
                <div className="row text-center story">
                    <div className="col-sm-4">
                        <div className="col-wrapper">
                            <div className="icon-wrapper"> <i className="fa fa-anchor"></i> </div>
                            <h3>EST. 1879</h3>
                            <p>Vivamus sagittis lacuson augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum ultricies vehicula.</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="col-wrapper">
                            <div className="icon-wrapper"> <i className="fa  fa-cutlery"></i> </div>
                            <h3>Cooking Traditions</h3>
                            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient monte nascetur ultricies vehicula. </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="col-wrapper">
                            <div className="icon-wrapper"> <i className="fa fa-coffee"></i> </div>
                            <h3>Food Quality</h3>
                            <p>Curabitur blandit matti tempus porttitor. Donec id elit non mi porta ut gravida at eget metus. Consectetur adipiscing elit ultricies vehicula.</p>
                        </div>
                    </div>
                </div> 
            </div>
            <section className="ss-style-bottom"></section>
        </div>
        );
    }
}

export default Story;