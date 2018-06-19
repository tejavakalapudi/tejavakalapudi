import React from "react";
import { connect } from "react-redux";

import { Row, Col, Container, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import LearnMore from "./LearnMore";
import ScrollToTop from "./ScrollToTop";
import UAE from "../../public/images/UAE-color.jpg";
import Nevada from "../../public/images/Nevada-color.jpg";
import Florida from "../../public/images/Florida.jpg";
// For all supported HTML attributes in JSX https://reactjs.org/docs/dom-elements.html
// For all event handlers https://reactjs.org/docs/events.html
// For component lifecycles https://reactjs.org/docs/react-component.html

class TravelDiaries extends React.Component {

    state = {
        itemsToView : this.props && !this.props.isHomePage && this.props.testimonials ? this.props.testimonials.length : 2
    }

    renderLearnMoreButton = () => {

        if( this.props && this.props.isHomePage ){
            return(<LearnMore redirect = "traveldiaries" />);
        }

    }

    render(){

        return(
            <div className = "travel__container">

                {
                    this.props && !this.props.isHomePage &&
                    <ScrollToTop />
                }
                <Container className = "testimonial__container-padding" >

                    <Row className = "about__section justify-content-center">
                        <Col className="section__title text__align-center" xs="12">
                            #travelDiaries.
                        </Col>
                        <Col xs="12" md="6" lg="4" className="text__align-center travel__image-container">
                            <Card>
                                <CardImg top src = { UAE } alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>U.A.E</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="6" lg="4" className="text__align-center travel__image-container">
                            <Card>
                                <CardImg top src = { Nevada } alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Nevada</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="6" lg="4" className="text__align-center travel__image-container">
                            <Card>
                                <CardImg top src = { Florida } alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Florida</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    { this.renderLearnMoreButton() }

                </Container>

            </div>
        );
    }

};

export default TravelDiaries; 