import React from "react";
import { removeProject } from "../actions/projects";
import { connect } from "react-redux";
import { TabContent, 
    TabPane, 
    Button, 
    ButtonGroup,
    Row, 
    Col,
    Container,
    Collapse,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';
import Specifications from "./Specifications";
import Header from "./HeaderNew";
import GoogleMap from "./GoogleMap";

class ProjectItemWithInfo extends React.Component {

    state = {
        activeTab: "1",
        showSpecs : false
    }

    toggle( tab ) {
        if ( this.state.activeTab !== tab ) {
          this.setState({
            activeTab: tab
          });
        }
    }

    toggleSpecs = () =>{
        this.setState({
            showSpecs: !this.state.showSpecs
        });        
    }

    render(){

        return (
            <div>
                <div className = "projects-container mx-auto">

                    <Container>
                        <Header activeTab = "projectinfo"/>
                        <Row className = "justify-content-center">
                            <div className = "col-lg-12 col-md-12">
                                <Row className = "justify-content-center">
                                    <h3 className = "project-item_title"> { this.props.project.title } </h3>
                                </Row>
                                
                                <Row className = "justify-content-center">
                                    <Col lg="10" className = "project-item_imageContainer">
                                        <img 
                                            src= { "../" + this.props.project.imageLocation } 
                                            alt= { this.props.project.title }
                                            className = "project-item_image"
                                        />
                                    </Col>

                                    <Col lg="11" className = "project-item_image">
                                        <p className = "project-item_subtitle"> 
                                            { this.props.project.subTitle }
                                        </p>
                                        <p className = "project-item_overview"> 
                                            { this.props.project.overview }
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Container>

                    <Row className = "justify-content-center project-item_navbar">
                        <Col lg = "3" className = "project-item_navbarTab" >
                            <a onClick = {this.toggleSpecs} > 
                                Specifications
                            </a> 
                        </Col>

                        <Col lg = "3" className = "project-item_navbarTab" >
                            <a>
                                Floor Plans 
                            </a>
                        </Col>

                        <Col lg = "3" className = "project-item_navbarTab" > 
                            <a>
                                Brochure
                            </a>   
                        </Col>
                    </Row>

                    {this.state.showSpecs && 
                        <Row className = "justify-content-center project-item_specs_section" >
                            <Col lg = "11">
                                <Collapse isOpen={ this.state.showSpecs }>
                                    <Specifications specs = { this.props.project.specs }/>
                                </Collapse>
                            </Col>
                        </Row>
                    }

                    <Row className = "justify-content-center project-item_amenities_section">
                        <Col lg = "7" className = "project-item_amenities" >
                            <Col lg ="11">
                                <p>  Amenities </p>
                                <ul>
                                    { this.props.project.amenities.length > 0 && 
                                        this.props.project.amenities.map(( amenity ) => {
                                            
                                            return <li> { amenity }</li>
                    
                                        })
                                    }
                                </ul>
                            </Col>
                        </Col>
                    </Row>

                    <Container>
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
                        <GoogleMap 
                            isMarkerShown
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbmqWgEH7KiHfYC6DJMjScUbWlcPb1XME&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            
                        />

                        <Row className = "justify-content-center project-item_contact">
                            <div className = "col-lg-12 col-md-12">
                                <Row className = "justify-content-center">
                                    <h3 className = "project-item_title"> Interested ? </h3>
                                </Row>
                                <Row className = "justify-content-center">
                                    <Button color="danger" size="lg">Contact Us</Button>
                                </Row>
                            </div>
                        </Row>
                    </Container>
                
                    { this.props.authInfo.isAuthorized && 

                        <button onClick = { 
                            ( e ) => {
                                this.props.dispatch( 
                                    removeProject( this.props.project ) 
                                ) 
                            } 
                        }> 
                            Remove Project 
                        </button>
                    
                    }
                    
                </div>
            </div> 
        )
    }

}

const mapStateToProps = ( store, props ) => {

    return {
        authInfo : store.authInfo,
        project : store.projects.find( ( project ) => project.id === props.match.params.id )
    }

}

export default connect( mapStateToProps )( ProjectItemWithInfo );