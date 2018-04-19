import React from "react";
import { connect } from "react-redux";
import ProjectItemWithInfo from "./ProjectItemWithInfo";
import ProjectItem from "./ProjectItem";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Container, Jumbotron } from "reactstrap";

class ProjectsPage extends React.Component {

    state = {
        showInfo : false,
        expandedProject : {} 
    };

    render(){

        return (

            <Jumbotron className = "body-container">
                
                <div className = "col-10 mx-auto p-5 ">
                    <h2 className = "text-secondary border-bottom border-secondary p-3" align="center" > Ongoing Ventures </h2>
                </div>

                <Row className = "justify-content-md-center">
                { 
                    this.props.projects.map( ( project ) => {

                        if( project.status === "ongoing" ){

                            return ( 
                                <Col sm = "5" >
                                    <ProjectItem project = { project } />
                                    <button 
                                        onClick = {
                                            () => {
                                                this.setState( () => ({ 
                                                    showInfo : true,
                                                    expandedProject : project
                                                }));
                                            }
                                        }
                                    > 
                                        Read More! 
                                    </button>                                    
                                </Col>
                            );
                               
                        }

                    })
                }
                </Row>

                <div className = "col-10 mx-auto p-5 ">
                    <h2 className = "text-secondary border-bottom border-secondary p-3" align="center" > Completed Ventures </h2>
                </div>

                <Row className = "justify-content-md-center">
                { 
                    this.props.projects.map( ( project ) => {

                        if( project.status === "completed" ){

                            return ( 
                                <Col sm = "5" >
                                    <ProjectItem project = { project } />
                                    <Row className = "justify-content-center">
                                    <button 
                                        onClick = {() => {
                                            this.setState( () => ({ 
                                                showInfo : true,
                                                expandedProject : project
                                            }));
                                        }} 
                                    > 
                                        Read More! 
                                    </button>
                                    </Row>
                                </Col>
                            );
                                    
                        }

                    })
                }
                </Row>
                                 
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

            </Jumbotron>

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
*/
//<Row className = "justify-content-md-center">