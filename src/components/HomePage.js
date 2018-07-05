import React from "react";
import { 
    Container, 
    Jumbotron,
    Row, 
    Col,
    Nav,
    NavItem,
    Navbar,
    Button,
    Input 
} from "reactstrap";
import { NavLink } from "react-router-dom"; 
import { connect } from "react-redux";
import Contact from "./Contact";
import GoogleMapComponent from "./GoogleMap";
import ScrollToTop from "./ScrollToTop";
import LanderPage from  "./LanderPage";
import AboutMePage from "./AboutMePage";
import Testimonials from "./Testimonials";
import Travel from "./TravelDiaries";
import Connect from "./Contact";

//https://gist.github.com/benjaminfisher/2757473

class HomePage extends React.Component {

    render(){
        return (
            <div>
                <ScrollToTop />
                <LanderPage />
                <AboutMePage isHomePage = "true"/>
                <Testimonials isHomePage = "true" />
                <Travel isHomePage = "true" push = { this.props.history.push }/>
                <Connect isHomePage = "true" />
            </div>
        );
    }
}; 

export default connect()( HomePage );