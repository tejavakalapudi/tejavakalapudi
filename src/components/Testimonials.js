import React from "react";
import { connect } from "react-redux";

import { Row, Col, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import LearnMore from "./LearnMore";
import ScrollToTop from "./ScrollToTop";

//https://www.loginradius.com/engineering/extended-linkedin-api-usage/

class Testimonials extends React.Component {

    state = {
        itemsToView : this.props && !this.props.isHomePage && this.props.testimonials ? this.props.testimonials.length : 2
    }

    renderLearnMoreButton = () => {

        if( this.props && this.props.isHomePage ){
            return(<LearnMore redirect = "testimonials" darkBackground="true"/>);
        }

    }

    render(){

        return(
            <div className = "testimonial__container">

                {
                    this.props && !this.props.isHomePage &&
                    <ScrollToTop />
                }
                <Container className = "testimonial__container-padding" >

                    <Row className = "about__section justify-content-between">
                        <Col className="section__title text__align-center">
                            What’s it like to work with me.
                        </Col>
                        {   this.props.testimonials.length > 0 &&
                            this.props.testimonials.slice( 0, this.state.itemsToView ).map( ( testimonial ) => {

                                return( 
                                <Row className = "justify-content-between testimonial_row">
                                    <Col xs="12" lg="3" className = "testimonial__image text__align-center">
                                        <img src = { testimonial.imageUrl } className="testimonial__image-rounded"/>
                                        <div className="testimonial__name" >
                                            { testimonial.name }
                                        </div>
                                        <div>
                                            { testimonial.title } 
                                        </div>
                                    </Col>
                                    <Col xs="12" lg="9" className = "testimonial__content text__align-center">
                                        {` "${ testimonial.testimonial }" `}
                                    </Col>
                                </Row>
                                );

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
        testimonials : store.testimonials
    };
};

export default connect( mapStateToProps )( Testimonials ); 