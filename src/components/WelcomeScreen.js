import React from "react";
import { connect } from "react-redux";
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
import sortProjectsByOrder from "../selectors/projects";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/lib/fa";

class WelcomeScreen extends React.Component{

    state = {

        activeClass : "",
        isOpen : false,
        hideWelcomeImageClass : "",
        imageScrolled : false,
        minHeight : window.innerHeight

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

        if ( welcomeDiv && !this.elementInViewport( welcomeDiv ) ){

            this.setState( {
                imageScrolled : true
            }); 
            
        }
    }

    resizeWelcomeDiv = () =>{

        const welcomeDiv = document.getElementById( "welcomeImgDiv" );

        if ( welcomeDiv ){
            this.setState( {
                minHeight: window.innerHeight
            });     
        }

    }

    render(){

        window.addEventListener( 'scroll', this.disableWelcomeScreenWhenScrolled );
        window.addEventListener( 'resize', this.resizeWelcomeDiv );

        if( this.state.imageScrolled ){

            window.removeEventListener( 'scroll', this.disableWelcomeScreenWhenScrolled );
            window.removeEventListener( 'resize', this.resizeWelcomeDiv );

        }

        return(

            <div className = {`welcome-image-div ${this.state.hideWelcomeImageClass}`} id="welcomeImgDiv" style={{ minHeight: this.state.minHeight }} >
        
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

                                <div className = "home-content-social">
                                    <Row className = "justify-content-center">
                                        <Col className = "home-content-social-icon" md="12" xs="2" >
                                            <a target="_blank" href="https://www.facebook.com/akruthiconstructions/" className = "social-icon-anchor-tag">
                                                <FaFacebook size={40} />
                                            </a>                                    
                                        </Col>
                                        <Col className = "home-content-social-icon" md="12" xs="2">
                                            <a target="_blank" href="https://twitter.com/VakalapudiRavi1" className = "social-icon-anchor-tag">
                                                <FaTwitter size={40} />
                                            </a>                                  
                                        </Col>
                                        <Col className = "home-content-social-icon" md="12" xs="2" >
                                            <a target="_blank" href="https://www.linkedin.com/in/akruthi-constructions-developers-a6b58491/" className = "social-icon-anchor-tag">
                                                <FaLinkedin size={40} />
                                            </a>                                 
                                        </Col>
                                        <Col className = "home-content-social-icon" md="12" xs="2">
                                            <a target="_blank" href="https://www.instagram.com/vakalapudiravikiran/" className = "social-icon-anchor-tag">
                                                <FaInstagram size={40} />
                                            </a>                                   
                                        </Col>
                                    </Row>
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
                            {
                                /*
                                <div className = "home-content-table" >

                                    <div className = "home-content-projects">

                                        <Row className = "" >
                                            <Col xs="8"></Col>
                                            <Col xs="3">        
                                                <img 
                                                    width=  "50px"
                                                    height= "50px"
                                                    src={ this.props.projects[ 0 ].thumbnailLocation} 
                                                />
                                            </Col>
                                            <Col xs="1"></Col>
                                        </Row>

                                        <Row className = "" >
                                            <Col xs="7"></Col>
                                            <Col xs="3">
                                                <img 
                                                    width=  "50px"
                                                    height= "50px"
                                                    src={ this.props.projects[ 1 ].thumbnailLocation} 
                                                />
                                            </Col>
                                            <Col xs="2"></Col>
                                        </Row>

                                        <Row className = "" >
                                            <Col xs="8"></Col>
                                            <Col xs="3">
                                                <img 
                                                    width=  "50px"
                                                    height= "50px"
                                                    src={ this.props.projects[ 2 ].thumbnailLocation} 
                                                />
                                            </Col>
                                            <Col xs="1"></Col>
                                        </Row>

                                        <Row className = "" >
                                            <Col xs="7"></Col>
                                            <Col xs="3">
                                                <img 
                                                    width=  "50px"
                                                    height= "50px"
                                                    src={ this.props.projects[ 3 ].thumbnailLocation} 
                                                />
                                            </Col>
                                            <Col xs="2"></Col>
                                        </Row>

                                        <Row className = "" >
                                            <Col xs="8"></Col>
                                            <Col xs="3">        
                                                <img 
                                                    width=  "50px"
                                                    height= "50px"
                                                    src={ this.props.projects[ 4 ].thumbnailLocation} 
                                                />
                                            </Col>
                                            <Col xs="1"></Col>
                                        </Row>

                                        <Row className = "" >
                                            <Col xs="7"></Col>
                                            <Col xs="3">
                                                <img 
                                                    width=  "50px"
                                                    height= "50px"
                                                    src={ this.props.projects[ 5 ].thumbnailLocation} 
                                                />
                                            </Col>
                                            <Col xs="2"></Col>
                                        </Row>

                                        <Row className = "" >
                                            <Col xs="8"></Col>
                                            <Col xs="3">
                                                <img 
                                                    width=  "50px"
                                                    height= "50px"
                                                    src={ this.props.projects[ 6 ].thumbnailLocation} 
                                                />
                                            </Col>
                                            <Col xs="1"></Col>
                                        </Row>
                                        
                                        <Row className = "" >
                                            <Col xs="7"></Col>
                                            <Col xs="3">
                                                <img 
                                                    width=  "50px"
                                                    height= "50px"
                                                    src={ this.props.projects[ 7 ].thumbnailLocation} 
                                                />
                                            </Col>
                                            <Col xs="2"></Col>
                                        </Row>
                                    </div>

                                </div>                                
                                */
                            }
                        </Col>

                    </Row>

                    <Modal isOpen={ this.state.isOpen } toggle={ this.toggleModal } className = "modal-dialog" size="lg">
                        <ModalBody className = "mx-auto" >
                            <img 
                                src= "https://firebasestorage.googleapis.com/v0/b/akruthi-4d551.appspot.com/o/greetingModal%2Fgreeting-img.jpg?alt=media&token=9f6f82d6-7000-44be-9b58-58fb3f47fe28"
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

/*
const mapStateToProps = ( store ) => {
    return { projects : sortProjectsByOrder( store.projects ) };
};

export default connect( mapStateToProps )( WelcomeScreen );
*/

export default WelcomeScreen;