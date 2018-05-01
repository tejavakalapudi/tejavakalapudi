import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ProjectItemWithInfo from "./ProjectItemWithInfo";
import ProjectItem from "./ProjectItem";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Container, Jumbotron, Navbar, Nav, NavItem } from "reactstrap";
import AddProject from "./AddProject";
import CarouselComponent from "./Carousel";
import Header from "./HeaderNew";

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

                {
                    /*
                <button> 
                    <NavLink to = {`/projectinfo/${project.id}`}> Read More! </ NavLink >
                </button> 
                    */

                }
                                      
            </Col>
        );
    }

    render(){
        return (
            <div>
                <AddProject/>
                <div className = "projects-container mx-auto">
                
                    <Container>
                        
                        <Header activeTab = "projects"/>

                        <Row className = "justify-content-center projects_body">
                            {
                                /* 
                                <div className = "col-lg-1" >
                                    <h3 className = "about_title" > PROJECTS</h3>
                                </div>                               
                                */
                            }

                            <div className = "col-lg-12 col-md-12">

                                <div className = "projects_section">

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

            </div>
        );

    };
};

const mapStateToProps = ( store ) => {
    return { projects : store.projects };
};

export default connect( mapStateToProps )( ProjectsPage );

// https://github.com/MicheleBertoli/react-gmaps 
// https://github.com/google-map-react/google-map-react for locations



/* 
this.state.showInfo && 
<Modal isOpen = { this.state.showInfo } closeTimeoutMS = { 200 }>
    <ProjectItem 
        project = { project } 
        isCompleted = { project.status === "completed" }
        showInfo = { this.state.showInfo } 
    />
    <button onClick = { () => { this.setState( () => ( { showInfo : false } ) ) }} > Close </button>
</Modal>


<Row className = "justify-content-md-center">


onClick = {
() => {

    this.setState( () => ({ 
        showInfo : true,
        expandedProject : project
    }));

}

                                 
<Modal isOpen={ this.state.showInfo } className = "modal-dialog modal-lg" >

<ModalHeader>{ this.state.expandedProject.title }</ModalHeader>

<ModalBody>
    <ProjectItemWithInfo project = { this.state.expandedProject }/>
</ModalBody>

<ModalFooter>
    <Button 
        color="primary" 
        onClick = {() => { 
            this.setState( () => ({ 
                showInfo : false, 
                expandedProject : {} 
            })) 
        }}
    >
        Cancel
    </Button>
</ModalFooter>

</Modal>
*/