import React, { Component } from 'react'
export default class Conntactus extends Component {
    render() {
        return (
            <div>
                {/* Start Bottom Header */}
                <div className="page-area">
                    <div className="breadcumb-overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="breadcrumb text-center">
                                    <div className="section-headline white-headline text-center">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <ul>
                                        <li className="home-bread">Home</li>
                                        <li>Conatct Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END Header */}

                <div className="map-area area-padding bg-color">
                    <div className="container">
                        <div className="row">
                            {/* Start Right Google Map */}
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                {/* Start Map */}
                                <div className="map-area">
                                <div style={{ width: '100%', height: 410 }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.7376952567456!2d-75.47676168466359!3d39.79044157944287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e38488808071%3A0x3749940e603a7fde!2s2093%20Philadelphia%20Pike%2C%20Claymont%2C%20DE%2019703%2C%20USA!5e0!3m2!1sen!2sin!4v1615374083066!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
                                </div>
                                {/* End Map */}
                            </div>
                            {/* End Right Google Map */}
                        </div>
                    </div>
                </div>
                {/* Start contact Area */}
                <div className="contact-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="contact-inner">
                                {/* Start contact icon column */}
                                <div className="col-md-6 col-sm-4 col-xs-12">
                                    <div className="contact-icon text-center">
                                        <div className="single-icon">
                                            <i className="fa fa-mobile" />
                                            <p>
                                            <span>Call: +1-302-803-9162</span><br />
                                                <span>Email: info@robusttechsystems.com</span><br/ >
                                                <span>Monday - Friday: 10 A.M. - 6 P.M. (EST)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Start contact icon column */}
                                <div className="col-md-6 col-sm-4 col-xs-12">
                                    <div className="contact-icon text-center">
                                        <div className="single-icon">
                                            <i className="fa fa-map-marker" />
                                            <p>
                                                <span>2093 Philadelphia Pike, #8730<br/>
                                                Claymont, DE 19730, <br/>USA</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
                {/* End Contact Area */}
            </div>
        )
    }
}
