import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContent from './Main/MainContent';
import MainHeader from './Main/MainHeader';
import MainFooter from './Main/MainFooter';
import Aboutus from './Company/Aboutus';
import Careers from './Company/Careers';
import ContactUs from './Company/Contactus';
import Blog from './Blog/Blog';
import ArtificialIntelligence from './Services/ArtificialIntelligence';
import CloudServices from './Services/CloudServices';
import WebSolutions from './Services/WebSolutions';
import MobileSolutions from './Services/MobileSolutions';
import DigitalMarketing from './Services/DigitalMarketing';
import ITStaffing from './Services/ITStaffing';
import HireDeveloper from './HireDevelopers/HireMobileDeveloper';
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <MainHeader></MainHeader>
          <Switch>
            <Route exact path='/' component={MainContent} />            
            <Route path='/aboutus' component={Aboutus} />
            <Route path='/careers' component={Careers} />
            <Route path='/contactus' component={ContactUs} />
            <Route path='/blog' component={Blog} />
            <Route path='/services/artificial-intelligence' component={ArtificialIntelligence} />
            <Route path='/services/cloud-solutions' component={CloudServices} />
            <Route path='/services/web-solutions' component={WebSolutions} />
            <Route path='/services/mobile-solutions' component={MobileSolutions} />
            <Route path='/services/digital-marketing-services' component={DigitalMarketing} />
            <Route path='/services/itstaffing' component={ITStaffing} />
            <Route path='/hiredeveloper/dedicated-developer' component={HireDeveloper} />
          </Switch>
          <MainFooter></MainFooter>
        </div>
      </Router>
      
    )
  }
}