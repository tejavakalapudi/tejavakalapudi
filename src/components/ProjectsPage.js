import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ProjectItemWithInfo from "./ProjectItemWithInfo";
import ProjectItem from "./ProjectItem";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Container, Jumbotron, Navbar, Nav, NavItem } from "reactstrap";
import AddProject from "./AddProject";
import CarouselComponent from "./Carousel";
import logoImage from "../../public/images/logo7.png";

//http://www.flintlockllc.com/ refer for hover state

class ProjectsPage extends React.Component {

    state = {
        showInfo : false,
        expandedProject : {} 
    };

    renderProjectItem = ( project ) => {
        return (
            <Col sm = "5" >
                <ProjectItem project = { project } />
                <button> 
                    <NavLink to = {`/projectinfo/${project.id}`}> Read More! </ NavLink >
                </button>                                    
            </Col>
        );
    }

    render(){
        return (
            <div>
                <AddProject/>

                <div className = "body-container mx-auto">

                    <Container fluid = "true">
                        <div className = "row justify-content-center">

                            <div className = "home_grid col-lg-10 col-md-11">
                                <CarouselComponent projects = { this.props.projects }/>
                            </div>

                            <div className = "col-lg-2 col-md-11">
                                <Navbar color="faded" dark>
                                    <Nav vertical>
                                        <NavItem className = "home_navitem">
                                            <NavLink to = "/" activeClassName = "is-active" exact={true} className = "navlink">HOME</NavLink>
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

                        <div className = "home_grid col-lg-10 col-md-11">
                            <div className = "col-10 mx-auto p-5 ">
                                <h2 className = "text-secondary border-bottom border-secondary p-3" align="center" > Ongoing Ventures </h2>
                            </div>
                        
                            <Row className = "justify-content-md-center">
                            {   
                                this.props.projects.map( ( project ) => {

                                    if( project.status === "ongoing" ){

                                        return this.renderProjectItem( project );
                                        
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

                                        return this.renderProjectItem( project );
                                                
                                    }

                                })
                            }
                            </Row>
                        </div>
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