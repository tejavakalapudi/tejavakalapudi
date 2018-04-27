import React from "react";
import ProjectItemWithInfo from "./ProjectItemWithInfo";
import AddProject from "./AddProject";
import { connect } from "react-redux";
import CarouselComponent from "./Carousel";
import { 
    Container, 
    Jumbotron,
    Row, 
    Col,
    Nav,
    NavItem,
    Navbar 
} from "reactstrap";
import { NavLink } from "react-router-dom"; 
import ProjectsPage from "./ProjectsPage";
import AboutUsPage from "./AboutUsPage";
import GridComponent from "./Grid";
import welcomeImage from "../../public/images/homepage7.png";
import logoImage from "../../public/images/logo7.png";

class HomePage extends React.Component {

    state = {
        activeclass: ""
    }

    toggle = () => {
        
        this.setState({
            activeclass: "fade"
        });
    }

    render(){

        return (
            <div>

                <div id = "welcomeImage" >
                    <img src = {welcomeImage} className = {`welcome-screen ${this.state.activeclass}`} onClick = {this.toggle}></img>
                </div>

                <div className = "body-container mx-auto">

                    <Container fluid = "true">

                        <div className = "row justify-content-center">

                            <div className = "col-lg-2 col-md-11">
                                <AboutUsPage />
                            </div>
        
                            <div className = "home_grid col-lg-8 col-md-11">
                                <GridComponent />
                            </div>

                            <div className = "col-lg-2 col-md-11">
                                <Navbar color="faded" dark>
                                    <Nav vertical>
                                        <NavItem className = "home_navitem">
                                            <NavLink to = "/projects" activeClassName = "is-active" exact={true} className = "navlink">PROJECTS</NavLink>
                                        </NavItem>
                                        <hr/>
                                        <NavItem className = "home_navitem">
                                            <NavLink to = "/buyersguide" activeClassName = "is-active" className = "navlink">BUYERS-GUIDE</NavLink>
                                        </NavItem>
                                        <hr/>
                                        <NavItem className = "home_navitem">
                                            <NavLink to = "/contactus" activeClassName = "is-active" className = "navlink" >CONTACT</NavLink>
                                        </NavItem>
                                        <hr/>
                                    </Nav>
                                </Navbar>
                                <div className = "home_logo_div" >
                                    <img src = {logoImage} className = "home_logo" ></img>
                                </div>
                            </div>

                        </div> 

                    </Container>

                </div>
            </div>
        );
    }
}; 

const mapStateToProps = ( store ) => {
    return { projects : store.projects };
};

export default connect( mapStateToProps )( HomePage );

// https://github.com/rommguy/react-custom-scroll for scrollbar

/*
        <Jumbotron className = "body-container" > 
            <Container>
                <AddProject/>
                <CarouselComponent projects = { props.projects }/>
            </Container>
            <ProjectsPage />
            <AboutUsPage />
        </Jumbotron>

*/