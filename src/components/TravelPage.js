import React from "react";
import { connect } from "react-redux";
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
import ScrollToTop from "./ScrollToTop";
// For all supported HTML attributes in JSX https://reactjs.org/docs/dom-elements.html
// For all event handlers https://reactjs.org/docs/events.html
// For component lifecycles https://reactjs.org/docs/react-component.html

class TravelPage extends React.Component {

    render(){

        return(
            <div className = "travel__container">

                <ScrollToTop />

                <Container className = "testimonial__container-padding" >

                    <Row className = "about__section justify-content-center">

                        { this.props.travel.name }

                    </Row>

                </Container>

            </div>
        );
    }

};

const mapStateToProps = ( store, props ) => {
    return { 
        travel : store.travelDiaries.find( ( travel ) => travel.id === props.match.params.id )
    };
};

export default connect( mapStateToProps )( TravelPage ); 