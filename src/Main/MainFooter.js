import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
export default class MainFooter extends Component {
    render() {
        return (
            <div>
                <footer className="footer2">
                    <div className="footer-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 col-sm-5 col-xs-12">
                                    <div className="footer-content logo-footer">
                                        <div className="footer-head">
                                            <div className="footer-logo">
                                                <a className="footer-white-logo" href="#"><img src="img/logo/footerlogo.png" alt /></a>
                                            </div>
                                            <p>Robust Tech Systems is a Delaware based e-verified company which provides solutions that consistently exceed expectations!</p>
                                            <div className="subs-feilds">
                                                <div className="suscribe-input">
                                                    <input type="email" className="email form-control width-80" id="sus_email" placeholder="Type Email" />
                                                    <button type="submit" id="sus_submit" className="add-btn">Subscribe</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end single footer */}
                                <div className="col-md-4 col-sm-3 col-xs-12">
                                    <div className="footer-content">
                                        <div className="footer-head">
                                            <h4>Services Link</h4>
                                            <ul className="footer-list">
                                                <li><Link to={"/aboutus"}>About Us</Link></li>
                                                <li><Link to={"/careers"}>Careers</Link></li>
                                                <li><Link to={"/contactus"}>Contact Us</Link></li>
                                                <li><Link to={"/hiredeveloper/dedicated-developer"}>Hire Developers</Link></li>
                                                <li><Link to={"/"}>Blog</Link></li>
                                            </ul>
                                            <ul className="footer-list hidden-sm">
                                            <li><Link to={"/services/web-solutions"}>Web Development</Link></li>
                                                <li><Link to={"/services/mobile-solutions"}>Mobile Development</Link></li>
                                                <li><Link to={"/services/cloud-solutions"}>Cloud Services</Link></li>
                                                <li><Link to={"/services/digital-marketing-services"}>Digital Marketing</Link></li>
                                                <li><Link to={"/services/itstaffing"}>IT Staffing</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <div className="footer-content last-content">
                                        <div className="footer-head">
                                            <h4>Robust Tech Systems</h4>
                                            <div className="footer-contacts">
                                                <p><span>Call: </span>+1-302-803-9162</p>
                                                <p><span>Email: </span> info@robusttechsystems.com</p>
                                                <p><span>Location: </span>2093 Philadelphia Pike, #8730, Claymont, DE 19730, USA</p>
                                            </div>
                                            <div className="footer-icons">
                                                <ul>
                                                    <li>
                                                        <a href={"https://www.facebook.com/robusttechsystems"}>
                                                            <i className="fa fa-facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={"https://www.linkedin.com/company/robust-tech-systems/"}>
                                                            <i className="fa fa-linkedin" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-area-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="copyright">
                                        <p>
                                            Copyright © 2021 <a href="http://robuttechsystems.com">Robust Tech Systems</a> All Rights Reserved </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
