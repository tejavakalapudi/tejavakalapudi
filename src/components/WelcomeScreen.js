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

import welcomeModal from "../../public/images/WelcomeModal.jpg";

class WelcomeScreen extends React.Component{

    state = {

        activeClass : "",
        isOpen : false,
        hideWelcomeImageClass : "",
        imageScrolled : false

    }

    toggleDisplay = () => {

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
    
    elementInViewport ( el ) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
      
        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }
      
        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }

    disableWelcomeScreenWhenScrolled = () => {

        const welcomeDiv = document.getElementById( "welcomeImgDiv" );

        console.log("scrolling");

        if( welcomeDiv && !this.elementInViewport( welcomeDiv ) ){

            this.setState( {
                activeClass : "hide-welcome-screen",
                hideWelcomeImageClass : "hide-welcome-screen",
                imageScrolled : true
            });

        }

    }

    render(){

        window.addEventListener( 'scroll', this.disableWelcomeScreenWhenScrolled );

        if( this.state.imageScrolled ){

            window.removeEventListener( 'scroll', this.disableWelcomeScreenWhenScrolled );

        }

        return(

            <div className = {`welcome-image-div ${this.state.hideWelcomeImageClass}`} id="welcomeImgDiv" >
        
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
                            <button type="button" class="close" aria-label="Close" color="primary" onClick={ this.toggleModal } >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </ModalFooter>
                    </Modal>
    
                </Container>
                
            </div>
        
        );

    }

};

export default WelcomeScreen;