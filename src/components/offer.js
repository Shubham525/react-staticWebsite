import React, { Component } from 'react';
class Offer extends Component {
    render() {
        return (
            <div id="special-offser" className="parallax pricing">
        <div className="container inner">

            <h2 className="section-title text-center">Special Offers</h2>
            <p className="lead main text-center">There is no sincerer love than the love of food!</p>
            
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    
                    <div className="pricing-item">
                        
                        <a href="#"><img className="img-responsive img-thumbnail" src="img/dish/dish3.jpg" alt="" /></a>
                        
                        <div className="pricing-item-details">
                            
                            <h3><a href="#">Chicken Fried Rice</a></h3>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                            <a className="btn btn-danger" href="#">Order now</a>
                            <div className="clearfix"></div>
                        </div>
                        <span className="hot-tag br-red">$26</span>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    
                    <div className="pricing-item">
                        
                        <a href="#"><img className="img-responsive img-thumbnail" src="img/dish/dish2.jpg" alt="" /></a>
                        
                        <div className="pricing-item-details">
                            
                            <h3><a href="#">Hot Fried Chicken</a></h3>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                            <a className="btn btn-danger" href="#">Order now</a>
                            <div className="clearfix"></div>
                        </div>
                        <span className="hot-tag br-lblue">$37</span>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="clearfix visible-md"></div>
                <div className="col-md-6 col-sm-6">
                    
                    <div className="pricing-item">
                        
                        <a href="#"><img className="img-responsive img-thumbnail" src="img/dish/dish4.jpg" alt="" /></a>
                        
                        <div className="pricing-item-details">
                            
                            <h3><a href="#">Thi Chicken Momo</a></h3>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                            <a className="btn btn-danger" href="#">Order now</a>
                            <div className="clearfix"></div>
                        </div>
                        <span className="hot-tag br-green">$54</span>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    
                    <div className="pricing-item">
                        
                        <a href="#"><img className="img-responsive img-thumbnail" src="img/dish/dish1.jpg" alt="" /></a>
                        
                        <div className="pricing-item-details">
                            
                            <h3><a href="#">Cocktail Sushi</a></h3>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                            <a className="btn btn-danger" href="#">Order now</a>
                            <div className="clearfix"></div>
                        </div>
                        <span className="hot-tag br-red">$27</span>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
        );
    }
}

export default Offer;