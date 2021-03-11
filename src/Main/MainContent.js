import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class SubContent extends Component {
  render() {
    return (
      <div>
        {/* Start Slider Area */}
        <div className="intro-area intro-area-3">
          <div className="bg-wrapper">
            <img src="img/background/bg2.jpg" alt />
          </div>
          <div className="intro-content">
            <div className="slider-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="slide-all-text">
                      {/* layer 1 */}
                      <div className="layer-1 wow fadeInUp" data-wow-delay="0.3s">
                        <h2 className="title2">Build an application powered by <span className="color-2">Artificial Intelligence</span> </h2>
                      </div>
                      {/* layer 2 */}
                      <div className="layer-2 wow fadeInUp" data-wow-delay="0.5s">
                        <p>We develop effective plans to move your customers behaviour. customer can be always his profit.</p>
                      </div>
                      {/* layer 3 */}
                      <div className="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                        <a href="#" className="ready-btn">Get In Touch</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 hidden-xs">
                    <div className="slide-images-inner wow fadeInUp" data-wow-delay="0.5s">
                      <div className="slide-images">
                        <img src="img/slider/s1.png" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area */}
        {/* Welcome service area start */}
        <div className="welcome-area welcome-area-2 bg-color area-padding-2">
          <div className="container">
            <div className="row">
              <div className="all-well-services">
                {/* single-well end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="well-services">
                    <div className="well-img">
                      <a className="big-icon" href="#"><i className="flaticon-041-computing-cloud" /></a>
                    </div>
                    <div className="main-wel">
                      <div className="wel-content">
                        <h4>Innovation</h4>
                        <p>As we work together, clients use our proven innovation process to discover and pursue opportunities, gain new competencies and transform organizations and cultures.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single-well end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="well-services">
                    <div className="well-img">
                      <a className="big-icon" href="#"><i className="flaticon-130-web" /></a>
                    </div>
                    <div className="main-wel">
                      <div className="wel-content">
                        <h4>Productivity</h4>
                        <p>We trains our consultants on how to use their resources more efficiently within the company’s structure, and we also market their training and business organization services to the clients.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single-well end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="well-services">
                    <div className="well-img">
                      <a className="big-icon" href="#"><i className="flaticon-083-mobile" /></a>
                    </div>
                    <div className="main-wel">
                      <div className="wel-content">
                        <h4>Values</h4>
                        <p>We believe time is money and are always swift with our operations and prompt in our communications. As a result , our customers get the right value they deserve.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Welcome service area End */}
        {/* Start Brand Area */}
        <div className="about-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="about-content">
                  <img src="img/about/ab.jpg" alt />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="about-text">
                  <h3>About our <span className="color-2">Robust Tech Systems</span></h3>
                  <p>Robust Tech Systems, Inc is a global IT Solutions provider focused on delivering customer value through high Quality Processes and Cost-efficient solutions. Robust Tech Systems provides systems integration services, outsourced software development and IT staffing solutions to Fortune 500, Government and to various industry leading companies. </p>
                  <ul className="hidden-sm">
                    <li><a href="#">Top-notch quality software development services</a></li>
                    <li><a href="#">Robust Tech Systems provides the entire range of IT solutions from strategy consulting to implementation and maintenance across a range of vertical domains such as Telecom, Transportation, Healthcare, Manufacturing, Education and Government.</a></li>
                    <li><a href="#">Robust Tech Systems help companies increase efficiency, shorten the development life cycle and deliver a higher quality end product</a></li>
                  </ul>
                  <Link className="ab-btn" to={"/aboutus"}>Know more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Banner Area */}
        {/* Service area start */}
        <div className="service-area bg-color area-padding">
          <div className="container">
            <div className="row">
              <div className="all-service">
                <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-service text-service">
                    <div className="service-img">
                      <img src="img/icon/lopard1.png" alt />
                    </div>
                    <div className="service-content">
                      <h4><a href="#">Big Data Engineering</a></h4>
                      <p>With all the talk lately about Big Data and seemingly very little results to show for it so far, some critics may be tempted to think that all the hype surrounding “Big Data” is unfounded and we are just experiencing a re-branding or resurgence of “more of the same” that the IT industry has seen before.</p>
                    </div>
                  </div>
                </div>
                {/* single-service end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="single-service">
                    <div className="service-img">
                      <img src="img/icon/lopard4.png" alt />
                    </div>
                    <div className="service-content">
                      <h4><a href="#">DevOps</a></h4>
                      <p>Roubust Tech System’s DevOps services help our customers accelerate the software development process, speed up time-to-market and increase flexibility, responsiveness, and productivity, while optimizing the cost of development and test processes.</p>
                    </div>
                  </div>
                </div>
                {/* single-service end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="single-service text-service">
                    <div className="service-img">
                      <img src="img/service/w2.png" alt />
                    </div>
                    <div className="service-content">
                      <h4><a href="#">Quality Testing</a></h4>
                      <p>We offers distinguished QA services and solutions with comprehensive and reliable testing processes for its customers while adhering to the highest quality of testing standards.
Our client centric QA Strategy ensures optimization through reduced testing overheads, augmented efficiency, improved testing processes and enhanced Test Quality.</p>
                    </div>
                  </div>
                </div>
                {/* single-service end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="single-service">
                    <div className="service-img">
                      <img src="img/service/w3.png" alt />
                    </div>
                    <div className="service-content">
                      <h4><a href="#">Staff Augumentation</a></h4>
                      <p>In staffing and recruitment, whether it is a single position or large-scale staffing initiative, our proprietary candidate search abilities and superior service enable us to identify, attract, screen and acquire the best candidates for our clients.</p>
                    </div>
                  </div>
                </div>
                {/* single-well end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="single-service text-service">
                    <div className="service-img">
                      <img src="img/service/w4.png" alt />
                    </div>
                    <div className="service-content">
                      <h4><a href="#">Application Development & Support</a></h4>
                      <p>In an ever-changing world, staying ahead of the competition is now harder than ever before. Optimization of business processes and performance is a continuous necessity if we are to improve customer engagement, realize increased efficiency and ultimately generate increased turnover and profit.</p>
                    </div>
                  </div>
                </div>
                {/* single-service end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="single-service">
                    <div className="service-img">
                      <img src="img/service/w5.png" alt />
                    </div>
                    <div className="service-content">
                      <h4><a href="#">Cloud Computing</a></h4>
                      <p>One of most popular enterprise-wide initiatives currently going on are ‘cloud migration’ programs of some kind or another. Finding business value for these programs is not hard to fathom – they include hyper elasticity in infrastructure consumption, subscription-based models, and agility derived from rapid speed of deployment of applications. These factors will continue to drive cloud adoption into the foreseeable future.</p>
                    </div>
                  </div>
                </div>
                {/* single-service end*/}
              </div>
            </div>
          </div>
        </div>
        {/* Service area End */}
        
        {/* End Tab end */}
        {/* Start Subscribe area */}
        <div className="achivement-area achivement-area-2 bg-color area-padding">
          <div className="container">
            {/* Start counter Area */}
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h3>Our achievement</h3>                  
                </div>
              </div>
            </div>
            <div className="row">
              <div className="achivement-content">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  {/* fun_text  */}
                  <div className="single-achive">
                    <div className="achive-image">
                      <img src="img/about/achive1.png" alt />
                    </div>
                    <div className="achivement-text">
                      <span className="achive-number">50+</span>
                      <h4>Happy Clients</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  {/* fun_text  */}
                  <div className="single-achive">
                    <div className="achive-image">
                      <img src="img/about/achive2.png" alt />
                    </div>
                    <div className="achivement-text">                      
                      <h4>Top Rated in Upwork</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  {/* fun_text  */}
                  <div className="single-achive">
                    <div className="achive-image">
                      <img src="img/about/achive3.png" alt />
                    </div>
                    <div className="achivement-text">
                      <span className="achive-number">80+</span>
                      <h4>Projects</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="we-services">
                  {/* single-well end*/}
                  <div className="digital-services">
                    <div className="digital-wel s1-item">
                      <div className="digital-img">
                        <a className="digital-icon" href="#"><img src="img/icon/lopard1.png" alt /></a>
                      </div>
                      <div className="digital-content">
                        <h4>Industries &amp; manufacturing</h4>
                      </div>
                    </div>
                  </div>
                  {/* single-well end*/}
                  <div className="digital-services">
                    <div className="digital-wel s2-item">
                      <div className="digital-img">
                        <a className="digital-icon" href="#"><img src="img/icon/lopard2.png" alt /></a>
                      </div>
                      <div className="digital-content">
                        <h4>Automobile &amp; transportation</h4>
                      </div>
                    </div>
                  </div>
                  {/* single-well end*/}
                  <div className="digital-services">
                    <div className="digital-wel s4-item">
                      <div className="digital-img">
                        <a className="digital-icon" href="#"><img src="img/icon/lopard3.png" alt /></a>
                      </div>
                      <div className="digital-content">
                        <h4>Food &amp; agriculture</h4>
                      </div>
                    </div>
                  </div>
                  {/* single-well end*/}
                  <div className="digital-services">
                    <div className="digital-wel s3-item">
                      <div className="digital-img">
                        <a className="digital-icon" href="#"><img src="img/icon/lopard4.png" alt /></a>
                      </div>
                      <div className="digital-content">
                        <h4>Health &amp; humanbody</h4>
                      </div>
                    </div>
                  </div>
                  {/* single-well end*/}
                  <div className="digital-services">
                    <div className="digital-wel s5-item">
                      <div className="digital-img">
                        <a className="digital-icon" href="#"><img src="img/icon/lopard5.png" alt /></a>
                      </div>
                      <div className="digital-content">
                        <h4>Media &amp; entertainment</h4>
                      </div>
                    </div>
                  </div>
                  {/* single-well end*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Subscribe area */}
        {/* Start project Area */}
        
        
      </div>
    )
  };
};