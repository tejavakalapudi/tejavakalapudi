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
import AboutUsPage from "./AboutUsPage";
import GridComponent from "./Grid";
import Header from "./Header";
import Contact from "./ContactUsPage";
import GoogleMapComponent from "./GoogleMap";
import ScrollToTop from "./ScrollToTop";
import { storageRef } from "../firebase/firebase";

class HomePage extends React.Component {

    projectRef = storageRef.child( "greetingModal" );

    handleGreetingImgUpload = ( e ) => {

        e.preventDefault();

        const image = e.target.files[0];

        this.projectRef.child( "greeting-img.jpg" ).put( image ).then( () => {

            console.log( "Greeting image upload request - Completed" );

        }).catch( (err) => {

            console.log( "Greeting Image Uploaded failed ", err );

        });

    };

    render(){

        return (
            <div>
                <ScrollToTop />

                <div className = "body-container mx-auto" id = "home__page">

                    <Container>
                        { this.props.authInfo.isAuthorized && 
                            <Button color="dark" size="lg" className="contact_text_format disabled" >
                                <Input 
                                    type="file" 
                                    name="greetingImg" 
                                    id="greetingImg" 
                                    onChange={ this.handleGreetingImgUpload } 
                                />
                                <div className="greeting-img-upload-text" >
                                    Upload Greeting Image!
                                </div>
                            </Button>
                        }
                        <GridComponent centerGrid = {true} push = { this.props.history.push }/>
                        <div className = "home-section_divider" ></div>

                        <Jumbotron className = "home-aboutus_section">
                            <div className = "row justify-content-center">

                                <div className = "col-lg-11 col-md-11 mx-auto">
                                    <AboutUsPage />
                                </div>
        
                            </div>
                        </Jumbotron>

                        <Row className = "justify-content-center">
                            <div className = "col-lg-12 col-md-12">
                                <Row className = "justify-content-center project-item_locationSection">
                                    <h3 className = "project-item_title"> Location </h3>
                                </Row>
                                <Row className = "justify-content-center">
                                    <div>
                                        <hr className = "projects_divider" />                               
                                    </div>
                                </Row>
                            </div>
                        </Row>

                        <GoogleMapComponent 
                            lat= {17.516247}
                            lng= {78.385560}
                            title =  "Akruthi Constructions & Developers"
                            address = "59, Blooming Dale Road, Madhura Nagar, Nizampet, Hyderabad, Telangana 500090, India"
                        />
                        <div className = "home-section_divider" ></div>
                        <Contact isHome = {true} />

                    </Container>

                </div>                
            
            </div>
        );
    }
}; 


const mapStateToProps = ( store ) => {

    return {
        authInfo : store.authInfo
    }

}

export default connect( mapStateToProps )( HomePage );