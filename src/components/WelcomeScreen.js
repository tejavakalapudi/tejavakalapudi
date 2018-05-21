import React from "react";
import { 
    Container, 
    Jumbotron,
    Row, 
    Col,
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter
} from "reactstrap";

import welcomeModal from "../../public/images/WelcomeModal.png"

class WelcomeScreen extends React.Component{

    state = {

        activeClass : "",
        isOpen : false,
        hideWelcomeImageClass : ""

    }

    toggleDisplay = () => {

        const learnMoreButton = document.getElementsByClassName( "learn-more-button" )[0];
        
        //learnMoreButton.style.visibility = "hidden";

        this.setState( {
            activeClass : "hide-welcome-screen"
        });

        setTimeout( () => {
            this.setState( {
                hideWelcomeImageClass : "hide-welcome-screen"
            });
        }, 500);

    }

    toggleModal = () => {

        this.setState( {
            isOpen : !this.state.isOpen
        });

    }

    componentDidMount() {
        this.toggleModal();
    }
    
    render(){

        return(

            <div className = {`welcome-image-div ${this.state.hideWelcomeImageClass}`}>
        
                <Container fluid = {true} className = "overlay-containter">
    
                    <Row className = "justify-content-center overlay-row">
                        
                        <div className = {`mobile__overlay ${this.state.activeClass}`}>
                            <div className = "home-content-table" >

                                <div className = "mobile-content-tablecell">

                                    <Container>
                                        <Row className = "justify-content-center" >
                                            <Col xs = "12" className = "mobile__overlay-title" >Akruthi</Col>
                                            <Col xs = "12" className = "mobile__overlay-subtitle" >BUILDING IT BETTER IN CONCRETE!</Col>
                                        </Row>
                                    </Container>
                                    
                                </div>
                                
                            </div>
                        </div>

                        <Col xs="4" className = {`columnText overlay-column1 ${this.state.activeClass}`}>
                        </Col>

                        <Col xs="4" className = {`columnText overlay-column2 ${this.state.activeClass}`} >

                            <div className = "home-content-table" >

                                <div className = "home-content-tablecell">

                                    <Row className = "justify-content-center learn-more-div" >
                                        <a className = {`learn-more-button ${this.state.activeClass}`} onClick = {this.toggleDisplay} >Learn More</a>
                                    </Row>

                                </div>
                                
                            </div>

                        </Col>

                        <Col xs="4" className = {`columnText overlay-column3 ${this.state.activeClass}`}>
                        </Col>

                    </Row>

                    <Modal isOpen={ this.state.isOpen } toggle={ this.toggleModal } className = "modal-dialog" size="lg">
                        <ModalBody className = "mx-auto" >
                            <img 
                                src= { welcomeModal } 
                                alt= "welcome-modal"
                                style={{width : "100%"}}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={ this.toggleModal }>Cancel</Button>
                        </ModalFooter>
                    </Modal>
    
                </Container>
                
            </div>
        
        );

    }

};

export default WelcomeScreen;