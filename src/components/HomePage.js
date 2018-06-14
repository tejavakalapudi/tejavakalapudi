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

//https://gist.github.com/benjaminfisher/2757473

class HomePage extends React.Component {

    render(){
        return (
            <div>
                <ScrollToTop />
                <LanderPage />
                <AboutMePage />
            </div>
        );
    }
}; 

export default HomePage;