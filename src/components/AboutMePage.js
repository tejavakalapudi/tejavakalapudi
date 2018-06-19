import React from "react";
import { Row, Col, Container } from "reactstrap";
import AboutMeImage from "../../public/images/AboutImage.jpg";
import { NavLink } from "react-router-dom";
import LearnMore from "./LearnMore";

class AboutMePage extends React.Component{

    renderLearnMoreButton = () => {

        if( this.props && this.props.location && this.props.location.pathname && this.props.location.pathname.search("about") > -1 ){
            return;
        }

        return(<LearnMore redirect = "about" />);

    }

    render(){

        return(
        
            <div className = "about__container">

                <Container className = "about__container-padding" >

                    <Row className = "about__section justify-content-center">
                        <Col xs="11" lg="3" className="text__align-center" >
                            <img src = { AboutMeImage } className="about__image-rounded"/>
                        </Col>
                        <Col xs="11" lg="9" className="text__align-center" >
                            <div className="about__title">
                                About me.
                            </div>
                            <div className="about__description">
                                Experienced Software Engineer with a demonstrated history of working in an entertainment industry. Skilled in front end development and familiar in integrating 3rd party ads & analytics frameworks like Freewheel, DoubleClick, Omniture and Comscore. Hands on experience with latest web technologies like React JS, Redux, Bootstrap-4, Firebase Database/Storage.
                            </div>
                        </Col>
                    </Row>

                    {this.renderLearnMoreButton()}

                </Container>

            </div>
        );

    }
}

export default AboutMePage;

//https://github.com/nkbt/react-collapse
//https://github.com/springload/react-accessible-accordion
//https://www.giken.com/en/vision/five_construction_principles/