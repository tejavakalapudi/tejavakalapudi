import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { 
    Row, 
    Col, 
    Container, 
    Card, 
    CardImg, 
    CardText, 
    CardBody, 
    CardTitle,
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from "reactstrap";
import { NavLink } from "react-router-dom";
import LearnMore from "./LearnMore";
import ScrollToTop from "./ScrollToTop";
import UAE from "../../public/images/UAE-NEW.jpg";
import Nevada from "../../public/images/Nevada-color.jpg";
import Florida from "../../public/images/Florida.jpg";
import { fileUploadToStorage, startAddTravelPage } from "../actions/travelDiaries";
import TravelForm from "./TravelForm";

import { MdNoteAdd } from 'react-icons/lib/md';
// For all supported HTML attributes in JSX https://reactjs.org/docs/dom-elements.html
// For all event handlers https://reactjs.org/docs/events.html
// For component lifecycles https://reactjs.org/docs/react-component.html

class TravelDiaries extends React.Component {

    state = {
        itemsToView : this.props && !this.props.isHomePage && this.props.testimonials ? this.props.testimonials.length : 2,
        showForm : false
    }

    renderLearnMoreButton = () => {

        if( this.props && this.props.isHomePage ){
            return(<LearnMore redirect = "traveldiaries" />);
        }

    }

    renderForm = () => {
        this.setState({
            showForm : true
        });
    }

    hideForm = () => {
        this.setState({
            showForm : false
        });
    }

    learnMore = ( id ) => {

        if( this.props && this.props.history && this.props.history.push ){
            
            this.props.history.push( `/travel/${ id }` );

        } else {

            this.props.push( `/travel/${ id }` );

        }
        
    }

    render(){

        console.log( "Travel Notes", this.props.travelDiaries );

        return(
            <div className = "travel__container">

                {
                    this.props && !this.props.isHomePage &&
                    <ScrollToTop />
                }
                <Container className = "testimonial__container-padding" >

                    <Row className = "about__section justify-content-center">

                        {
                            this.props && this.props.authInfo.isAuthorized && !this.props.isHomePage && !this.state.showForm &&
                            <Col className="quote__symbol text__align-center" xs="12" >
                                <MdNoteAdd onClick = { this.renderForm } />
                            </Col>
                        }

                        {
                            this.state.showForm &&
                            <Col className="text__align-center" xs="12" md = "6">
                                <TravelForm hideForm = { this.hideForm } />
                            </Col> 
                        }

                        <Col className="section__title text__align-center" xs="12">
                            #travelDiaries.
                        </Col>
                        <Col xs="12" md="6" lg="4" className="text__align-center travel__image-container">
                            <Card className = "travel__card">
                                <CardImg top src = { UAE } alt="Card image cap" className = "travel__card-image"/>
                                <div className = "travel__card-overlay"></div>
                                <div class="travel__card-text">
                                    <p className = "travel__card-title"> U.A.E </p>
                                    <p className = "travel__card-description"> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="12" md="6" lg="4" className="text__align-center travel__image-container">
                            <Card className = "travel__card">
                                <CardImg top src = { Nevada } alt="Card image cap" className = "travel__card-image"/>
                                <div className = "travel__card-overlay"></div>
                                <div class="travel__card-text">
                                    <p className = "travel__card-title"> Nevada </p>
                                    <p className = "travel__card-description"> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                                </div>
                            </Card>
                        </Col>
                        <Col xs="12" md="6" lg="4" className="text__align-center travel__image-container">
                            <Card className = "travel__card">
                                <CardImg top src = { Florida } alt="Card image cap" className = "travel__card-image"/>
                                <div className = "travel__card-overlay"></div>
                                <div class="travel__card-text">
                                    <p className = "travel__card-title"> Florida </p>
                                    <p className = "travel__card-description"> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                                </div>
                            </Card>
                        </Col>
                        {/*
                            <Col xs="12" md="6" lg="4" className="text__align-center travel__image-container">
                                <Card>
                                    <CardImg top src = { Florida } alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Florida</CardTitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>  
                                                 
                        */}

                        {
                            this.props.travelDiaries.map( ( travel ) => {
                                
                                if( travel.thumbnailLocation && travel.name && travel.summary ){

                                    return(
                                        <Col xs="12" md="6" lg="4" className="text__align-center travel__image-container">
                                            <Card className = "travel__card">
                                                <CardImg top src = { travel.thumbnailLocation } alt="Card image cap" className = "travel__card-image"/>
                                                <div className = "travel__card-overlay"></div>
                                                <div class="travel__card-text">
                                                    <p className = "travel__card-title"> { travel.name } </p>
                                                    <p className = "travel__card-description">{ travel.summary }</p>
                                                    <Button color="danger" onClick = { () => { this.learnMore( travel.id ); } } >Learn More</Button>
                                                </div>
                                            </Card>
                                        </Col>
                                    );

                                }

                            })
                        }
                    </Row>

                    { this.renderLearnMoreButton() }

                </Container>

            </div>
        );
    }

};

const mapStateToProps = ( store ) => {
    return { 
        travelDiaries : store.travelDiaries,
        authInfo : store.authInfo
    };
};

export default connect( mapStateToProps )( TravelDiaries ); 