import React from "react";
import { 
    Container, 
    Jumbotron,
    Row, 
    Col
} from "reactstrap";

class WelcomeScreen extends React.Component{

    state = {

        activeClass : ""

    }

    toggleDisplay = () => {

        const learnMoreButton = document.getElementsByClassName( "learn-more-button" )[0];
        
        //learnMoreButton.style.visibility = "hidden";

        this.setState( {
            activeClass : "hide-welcome-screen"
        });

    }

    
    render(){

        return(

            <div className = {`welcome-image-div ${this.state.activeClass}`}>
        
                <Container fluid = {true} className = "overlay-containter">
    
                    <Row className = "justify-content-center overlay-row">
                        
                        <div className = {`mobile__overlay ${this.state.activeClass}`}>
                            <div className = "home-content-table" >

                                <div className = "mobile-content-tablecell">

                                    <Row className = "justify-content-center" >
                                        <div className = "mobile__overlay-title" >Akruthi</div>
                                        <div className = "mobile__overlay-subtitle" >BUILDING IT BETTER IN CONCRETE!</div>
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
                                        <a className = "learn-more-button" onClick = {this.toggleDisplay} >Learn More</a>
                                    </Row>

                                </div>
                                
                            </div>

                        </Col>

                        <Col xs="4" className = {`columnText overlay-column3 ${this.state.activeClass}`}>
                        </Col>



                    </Row>
    
                </Container>
        
            </div>
        
        );

    }

};

export default WelcomeScreen;