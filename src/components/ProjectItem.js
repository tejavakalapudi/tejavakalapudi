import React from "react";
import { startRemoveProject } from "../actions/projects";
import { connect } from "react-redux";
import { FaMinusSquare, FaEdit } from "react-icons/lib/fa";
import { Row, Button, Container } from "reactstrap";

const ProjectItem = ( props ) => (
    
    <div> 
        { props.project.thumbnailLocation &&
            
            <div 
                className = "row justify-content-center imageContainer"
            >
                <img 
                    src= { props.project.thumbnailLocation } 
                    alt= { props.project.title }
                    width=  { props.project.status === "ongoing" ? "320px" : "272px" }  
                    height= { props.project.status === "ongoing" ? "227px" : "193px" }
                    onClick = { props.onClick }
                    className = "project-item_image"
                />
                <div class="imageOverlay">
                    <div class="overlayText">
                        <p className="project-item_subtitle"> { props.project.title } </p>
                        <p><a  onClick = { props.onClick } style={ { "text-decoration": "underline" } }> Learn More </a></p>
                    </div>
                </div>

            </div>
        }

        { props.authInfo.isAuthorized && 
            
            <Container>
                <Row className = "justify-content-center"> 
                    <Button 
                        onClick = { 
                            ( e ) => {
                                props.dispatch( 
                                    startRemoveProject( { id : props.project.id } ) 
                                ) 
                            } 
                        }
                        
                    > 
                        <FaMinusSquare size={20} />
                    </Button>
                </Row>
            </Container>
        
        }
        
    </div> 
);

const mapStateToProps = ( store ) => {

    return {
        authInfo : store.authInfo
    }

}

export default connect( mapStateToProps )( ProjectItem );