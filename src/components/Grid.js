import React from "react";
import { connect } from "react-redux";
import {
    Container, 
    Card, 
    CardTitle, 
    CardText, 
    CardImg,
    CardColumns,
    CardBody,
    Row, 
    Col 
} from "reactstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/lib/fa";
import sortProjectsByOrder from "../selectors/projects";

//http://shoelace.io/ for bootstrap

class Grid extends React.Component {

    onClick = ( id ) => {
        this.props.push( `/projectinfo/${ id }` );
    };

    render(){
        return (
            <Container className = "grid__container">
            { this.props.projects.length > 0 &&
                <Row className = "justify-content-center">
                    <div className = "home__grid col-lg-10 col-md-11 mx-auto">
                        <CardColumns>
                            <Card className = "imageContainer" >
                                <CardImg top width="320px" src={ this.props.projects[ 0 ].thumbnailLocation} alt="Card image cap" className="project-item_image grid_overlay"/>
                                <div class="imageOverlay">
                                    <div class="overlayText">
                                        <p className="project-item_subtitle grid_overlay"> { this.props.projects[ 0 ].title } </p>
                                        <p> <a onClick = { () =>{ this.onClick( this.props.projects[ 0 ].id ) } } style={ { "text-decoration": "underline" } }> Learn More </a></p>
                                    </div>
                                </div>
                            </Card>

                            <Card body className = { this.props.centerGrid && "cardBody" }>
                                <CardTitle>Value</CardTitle>
                                <CardText className = "card__zoom" >Akruthi's essential goal consists of constructing most gracious constructions with affordable monetary value.</CardText>
                            </Card>
        
                            <Card body inverse color="success" className = { this.props.centerGrid && "cardBody" } >
                                <CardTitle>Quality</CardTitle>
                                <CardText className = "card__zoom" >We work with a relentless focus on global level quality, production efficiency, ownership and accountability for our delivery.</CardText>
                            </Card>
        
                            <Card body inverse color = "info" className = { this.props.centerGrid && "cardBody" } >
                                <CardTitle>Value Added Services</CardTitle>
                                <CardText className = "card__zoom" >Our customer centric services will always help our clientele to be at maximum satisfaction.</CardText>
                            </Card>
        
                            <Card className = "imageContainer">
                                <CardImg top width="320px" src={ this.props.projects[ 1 ].thumbnailLocation } alt="Card image cap" className="project-item_image grid_overlay"/>
                                <div class="imageOverlay">
                                    <div class="overlayText">
                                        <p className="project-item_subtitle grid_overlay"> { this.props.projects[ 1 ].title } </p>
                                        <p> <a onClick = { () =>{ this.onClick( this.props.projects[ 1 ].id ) } } style={ { "text-decoration": "underline" } }> Learn More </a></p>
                                    </div>
                                </div>
                            </Card>
    
                            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className = { this.props.centerGrid && "cardBody" }>
                                <CardTitle>Prompt Delivery</CardTitle>
                                <CardText className = "card__zoom" >By employing the modernist technology, our extremely enthusiastic employees be sure that projects extradite on time. </CardText>
                            </Card>
                            
                            <Card>
                                <CardText className = "card__social">
                                    <a target="_blank" href="https://www.facebook.com/akruthiconstructions/">
                                        <FaFacebook size={40} color="#3B5998" />
                                    </a>
        
                                    <a target="_blank" href="https://twitter.com/VakalapudiRavi1">
                                        <FaTwitter size={40} color="#1DA1F2" />
                                    </a>
        
                                    <a target="_blank" href="https://www.linkedin.com/in/akruthi-constructions-developers-a6b58491/">
                                        <FaLinkedin size={40} color="#0077B5" />
                                    </a>
        
                                    <a target="_blank" href="https://www.instagram.com/vakalapudiravikiran/">
                                        <FaInstagram size={40} color="#262626" />
                                    </a>
                                </CardText>
                            </Card>
        
                            <Card className = "imageContainer" >
                                <CardImg top width="320px" src={ this.props.projects[ 2 ].thumbnailLocation } alt="Card image cap" className="project-item_image grid_overlay"/>
                                <div class="imageOverlay">
                                    <div class="overlayText">
                                        <p className="project-item_subtitle grid_overlay"> { this.props.projects[ 2 ].title } </p>
                                        <p> <a onClick = { () =>{ this.onClick( this.props.projects[ 2 ].id ) } } style={ { "text-decoration": "underline" } }> Learn More </a></p>
                                    </div>
                                </div>
                            </Card>
        
                            <Card body inverse color="danger" className = { this.props.centerGrid && "cardBody" }>
                                <CardTitle>Expert Advice</CardTitle>
                                <CardText className = "card__zoom" >To make your job easier, we have a specialized team of advisories who makes sure to guide you through out the path of property buying</CardText>
                            </Card>
                            <Card body inverse color="warning" className = { this.props.centerGrid && "cardBody" } >
                                <CardTitle>Promise</CardTitle>
                                <CardText className = "card__zoom" >From just a vision, exceptionally constructed homes, we accomplish your dream home become a reality!</CardText>
                            </Card>
                        </CardColumns>
                    </div>
                </Row>
            }
            </Container>

        );
    }

};


const mapStateToProps = ( store ) => {
    return { projects : sortProjectsByOrder( store.projects ) };
};

export default connect( mapStateToProps )( Grid );
