import React, { Component } from 'react';
class Chief extends Component {
    render() {
        return (
            <div id="chefs" className="parallax pricing">
        <div className="container inner">

            <h2 className="section-title text-center">Our Chefs</h2>
            <p className="lead main text-center">There is no sincerer love than the love of food!</p>
            
            <div className="row text-center chefs">
                <div className="col-sm-4">
                    <div className="col-wrapper">
                        <div className="icon-wrapper">
                            <img src="img/chefs/1.jpg" />
                        </div>
                        <h3>Saransh Goila</h3>
                        <p>Vivamus sagittis lacuson augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum ultricies vehicula.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="col-wrapper">
                        <div className="icon-wrapper">
                            <img src="img/chefs/3.jpg" />
                        </div>
                        <h3>Jane Doe</h3>
                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient monte nascetur ultricies vehicula. </p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="col-wrapper">
                        <div className="icon-wrapper">
                            <img src="img/chefs/2.jpg" />
                        </div>
                        <h3>Anton Mosimann</h3>
                        <p>Curabitur blandit matti tempus porttitor. Donec id elit non mi porta ut gravida at eget metus. Consectetur adipiscing elit ultricies vehicula.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
        );
    }
}

export default Chief;