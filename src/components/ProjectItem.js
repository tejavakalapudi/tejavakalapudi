import React from "react";
import { removeProject } from "../actions/projects";
import { connect } from "react-redux";

const ProjectItem = ( props ) => (
    
    <div> 
        {
            /*
                { props.project.title && 
                    <h2 class="row justify-content-center" > { props.project.title } </h2> 
                }

                { props.project.subTitle && 
                    <h3 class="row justify-content-center" > { props.project.subTitle } </h3> 
                }
            */
        } 


        { props.project.thumbnailLocation &&
            
            <div 
                className = "row justify-content-center imageContainer"
            >
                <img 
                    src= { props.project.thumbnailLocation } 
                    alt= { props.project.title }
                    width=  { props.project.status === "ongoing" ? "320px" : "272px" }  
                    height= { props.project.status === "ongoing" ? "227px" : "193px" }
                    onClick = {props.onClick}
                    className = "project-item_image"
                />
                <div class="imageOverlay">
                    <div class="overlayText">
                        <p className="project-item_subtitle"> { props.project.title } </p>
                        <p><a  onClick = {props.onClick} style={ {"text-decoration": "underline"} }> Learn More </a></p>
                    </div>
                </div>

            </div>
        }

        { props.authInfo.isAuthorized && 
            
            <button 
                onClick = { 
                    ( e ) => {
                        props.dispatch( 
                            removeProject( props.project ) 
                        ) 
                    } 
                }
                class="row justify-content-center" 
            > 
                Remove Project 
            </button>
        
        }
        
    </div> 
);

const mapStateToProps = ( store ) => {

    return {
        authInfo : store.authInfo
    }

}

export default connect( mapStateToProps )( ProjectItem );