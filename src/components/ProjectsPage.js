import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ProjectItemWithInfo from "./ProjectItemWithInfo";
import ProjectItem from "./ProjectItem";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Container, Jumbotron, Navbar, Nav, NavItem } from "reactstrap";
import Header from "./Header";
import { FaPlusSquare } from "react-icons/lib/fa";
import sortProjectsByOrder from "../selectors/projects";

//http://www.flintlockllc.com/ refer for hover state

class ProjectsPage extends React.Component {

    state = {
        showInfo : false,
        expandedProject : {} 
    };

    renderProjectItem = ( project ) => {

        return (
            <Col 
                xl= { project.status === "ongoing" ? "4" : "3" }
                lg= { project.status === "ongoing" ? "5" : "4" } 
                md= { project.status === "ongoing" ? "6" : "5" } 
                sm="11"
                className = "project__item"
            >

                <ProjectItem 
                    project = { project }
                    onClick = {
                        () => {
                            this.props.history.push( `/projectinfo/${ project.id }` );
                        }
                    } 
                />
                                      
            </Col>
        );
    }

    addProject = () =>{

        this.props.history.push( "/addproject" );

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
                                            <Button color="info" onClick = { this.addProject } > 
                                                <FaPlusSquare size = { 50 } />
                                            </Button>
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
        projects : sortProjectsByOrder( store.projects ),
        authInfo : store.authInfo
    };
};

export default connect( mapStateToProps )( ProjectsPage );

// https://github.com/MicheleBertoli/react-gmaps 
// https://github.com/google-map-react/google-map-react for locations
