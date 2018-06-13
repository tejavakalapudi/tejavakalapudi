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

class HomePage extends React.Component {

    state = {
        minHeight : window.innerHeight
    }

    resizeWelcomeDiv = () =>{

        const welcomeDiv = document.getElementById( "landingDiv" );

        if ( welcomeDiv ){
            this.setState( {
                minHeight: window.innerHeight
            });     
        }

    }

    render(){

        window.addEventListener( 'resize', this.resizeWelcomeDiv );

        return (
            <div className = "home__container" id = "landingDiv" style={{ minHeight: this.state.minHeight }}>
                <ScrollToTop />
                <div className = "home__container-image" >
                    <div className = "home__overlay"></div>         
                </div>
                <div className = "home__container-logo">
                    <div className = "home__title" >tejavakalapudi.</div>
                    <div className = "home__subtitle" >just another software developer</div>    
                </div>
            </div>
        );
    }
}; 


const mapStateToProps = ( store ) => {

    return {}

}

export default connect( mapStateToProps )( HomePage );