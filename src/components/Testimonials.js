import React from "react";
import { connect } from "react-redux";

import { Row, Col, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import LearnMore from "./LearnMore";
import ScrollToTop from "./ScrollToTop";

//https://www.loginradius.com/engineering/extended-linkedin-api-usage/

class Testimonials extends React.Component {

    state = {
        itemsToView : this.props && !this.props.isHomePage && this.props.testimonials ? this.props.testimonials.length : 3,
        borderColors : [ "#007bff", "#28a745", "#17a2b8", "#ffc107", "#dc3545" ]
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
                <div className = "testimonial__overlay">
                </div>

                <Container className = "testimonial__container-padding" >

                    <Row className = "about__section justify-content-between">
                        <Col className="section__title darkBackground text__align-center">
                            What’s it like to work with me.
                        </Col>

                        <Row className = "justify-content-center testimonial_row">
                        {   this.props.testimonials.length > 0 &&
                            this.props.testimonials.slice( 0, this.state.itemsToView ).map( ( testimonial, index ) => {

                                return( 
                                
                                    <Col xs="11" md="12" className = "testimonial" style = { {borderLeft : `3px solid ${this.state.borderColors[index]}`} }>
                                        <div className = "testimonial__content text__align-center" >{` "${ testimonial.testimonial }" `}</div>
                                        <div className="testimonial__name text__align-right" >{` ${ testimonial.name } `}</div>
                                        <div className="testimonial__title text__align-right" >{`${ testimonial.title }`}</div>
                                    </Col>
                                
                                );

                            })
                        }
                        </Row>
                        
                    </Row>

                    { this.props.testimonials && this.props.testimonials.length > 3 && this.renderLearnMoreButton() }

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