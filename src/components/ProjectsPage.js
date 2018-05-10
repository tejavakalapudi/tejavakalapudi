import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ProjectItemWithInfo from "./ProjectItemWithInfo";
import ProjectItem from "./ProjectItem";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Container, Jumbotron, Navbar, Nav, NavItem } from "reactstrap";
import AddProject from "./AddProject";
import Header from "./HeaderNew";
import backgroundImage from "../../public/images/background.jpg";

//http://www.flintlockllc.com/ refer for hover state

class ProjectsPage extends React.Component {

    state = {
        showInfo : false,
        expandedProject : {} 
    };

    renderProjectItem = ( project ) => {
        return (
            <Col 
                lg= { project.status === "ongoing" ? "4" : "3" }
                md= { project.status === "ongoing" ? "4" : "3" } 
                sm="11"
            >

                <ProjectItem 
                    project = { project }
                    onClick = {
                        () => {
                            this.props.history.push( `/projectinfo/${project.id}` );
                        }
                    } 
                />
                                      
            </Col>
        );
    }

    addProject = () =>{

        this.props.history.push( "/addProject" );

    }

    render(){
        return (
            <div>
                <div className = "projects-container mx-auto">
                
                    <Container>
                        
                        <Header activeTab = "projects"/>

                        <Row className = "justify-content-center projects_body">
   
                            <div className = "col-lg-12 col-md-12">

                                <div className = "projects_section">

                                    {this.props.authInfo.isAuthorized &&
                                        <Row className = "justify-content-center"> 
                                            <button onClick = { this.addProject }> 
                                                Add Project 
                                            </button>
                                        </Row> 
                                    }

                                    <Row className = "justify-content-center">
                                        <h3 className = "projects_statusfont"> Ongoing Projects</h3>
                                    </Row>

                                    <Row className = "justify-content-center">
                                        <div>
                                            <hr className = "projects_divider" />                               
                                        </div>
                                    </Row>
                                    
                                    <Row className = "justify-content-center">
                                    
                                        {   
                                            this.props.projects.map( ( project ) => {

                                                if( project.status === "ongoing" ){

                                                    return this.renderProjectItem( project );
                                                    
                                                }

                                            })
                                        }
                
                                    </Row>

                                </div>

                                <div className = "projects_section">
                                    
                                    <Row className = "justify-content-center">
                                        <h3 className = "projects_statusfont"> Completed Projects</h3>
                                    </Row>

                                    <Row className = "justify-content-center">
                                        <div>
                                            <hr className = "projects_divider"/>                               
                                        </div>
                                    </Row>

                                    <Row className = "justify-content-center">
                                        { 
                                            this.props.projects.map( ( project ) => {

                                                if( project.status === "completed" ){

                                                    return this.renderProjectItem( project );
                                                            
                                                }

                                            })
                                        }
                                    </Row>
                                
                                </div>

                            </div>

                        </Row>

                    </Container>                            
                </div>

                {
                    /*
                    //To have background behind
                    <div className = "background-image">
                        <img src = {backgroundImage}></img>
                    </div>
                    */
                }

            {/*</div>*/}
            </div>
        );

    };
};

const mapStateToProps = ( store ) => {
    return { 
        projects : store.projects,
        authInfo : store.authInfo
    };
};

export default connect( mapStateToProps )( ProjectsPage );

// https://github.com/MicheleBertoli/react-gmaps 
// https://github.com/google-map-react/google-map-react for locations
