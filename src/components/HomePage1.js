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
import AboutUsPage from "./AboutUsPage1";
import GridComponent from "./Grid";
import welcomeImage from "../../public/images/homepage7.png";
import logoImage from "../../public/images/logo7.png";
import HeaderNew from "./HeaderNew";

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

                <div className = "buyers-guide-container mx-auto">

                    <Container>

                        <HeaderNew activeTab = "home"/>

                        <Row className = "justify-content-center">
                            <div className = "home_grid col-lg-10 col-md-11 mx-auto">
                                <GridComponent centerGrid = {true}/>
                            </div>
                        </Row>
                        

                        <div className = "row justify-content-center">

                            <div className = "col-lg-9 col-md-11 mx-auto">
                                <AboutUsPage />
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