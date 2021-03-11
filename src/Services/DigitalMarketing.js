import React from 'react'
import SiderBar from '../Main/SideBar'
import OwlCarousel from 'react-owl-carousel2';

export default function DigitalMarketing() {
    const options = {
        'items': 4,
        'rewind': true,
        'autoplay': true,
        'loop': ((".owl-carousel .item").length > 1) ? true : false,
        'nav': false,
        'dots': false,
        'margin': 20,
        'responsive': {
            '768': {
                'items': 3
            },
            '992': {
                'items': 4
            }
        }
    }
    return (
        <div>
            {/* Start Bottom Header */}
            <div className="page-area" style={{ background: '/flightsuppliers/flightimage.jfif !important' }}>
                <div className="breadcumb-overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="breadcrumb text-center">
                                <div className="section-headline white-headline text-center">
                                    <h3>Digital Marketing Services</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-services-page area-padding">
                <div className="container">
                    <div className="row">
                        <SiderBar pagename={"Mobile"}></SiderBar>
                        {/* Start service page */}
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="row">
                                <h3>Digital Marketing</h3>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="single-well mar-well">
                                        <p>Robust Tech Systems is a leading cloud computing company , Our services are designed to meet the cloud computing needs of businesses of all sizes.Developing and deploying applications on the cloud requires careful assessment and planning for security, scalability, capacity and integration with other on-premise or cloud applications.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <h4>Digital Marketing Services</h4>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>Branding</li>
                                            <li>Social Media Marketing</li>
                                            <li>Organic Long-Term SEO</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                        <li>Paid Search Advertising</li>
                                            <li>Local Search Strategy</li>
                                            <li>Traffic and Lead Generation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <h4>Popular Mobile Technologies</h4>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="brand-content">
                                        <div className="brand-items">
                                            <OwlCarousel options={options} margin={0}>
                                                <div className="single-brand-item">
                                                    <img src="/hotelsuppliers/expedia.svg" alt="Hotel suppliers" />
                                                </div>
                                                <div className="single-brand-item">
                                                    <img src="/hotelsuppliers/hotelbeds.svg" alt="Hotel suppliers" />
                                                </div>
                                                <div className="single-brand-item">
                                                    <img src="/hotelsuppliers/desiya.png" alt="Hotel suppliers" />
                                                </div>
                                                <div className="single-brand-item">
                                                    <img src="/hotelsuppliers/rezlive.png" alt="Hotel suppliers" />
                                                </div>
                                                <div className="single-brand-item">
                                                    <img src="/hotelsuppliers/GRN.png" alt="Hotel suppliers" />
                                                </div>
                                                <div className="single-brand-item">
                                                    <img src="/hotelsuppliers/tboholidays.svg" alt="Hotel suppliers" />
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div></div></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>       
    )
}