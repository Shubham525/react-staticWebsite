import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="dark-wrapper">
            <section className="ss-style-top"></section>
            <div className="container inner">
                <div className="row">
                    <div className="col-sm-6">
                        &copy; Copyright MeatKing 2014
                        <br/>Theme By <a className="themeBy" href="http://www.Themewagon.com">ThemeWagon</a>
                    </div>
                    <div className="col-sm-6">
                        <div className="social-bar">
                            <a href="#" className="fa fa-instagram tooltipped" title=""></a>
                            <a href="#" className="fa fa-youtube-square tooltipped" title=""></a>
                            <a href="#" className="fa fa-facebook-square tooltipped" title=""></a>
                            <a href="#" className="fa fa-pinterest-square tooltipped" title=""></a>
                            <a href="#" className="fa fa-google-plus-square tooltipped" title=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default Footer;