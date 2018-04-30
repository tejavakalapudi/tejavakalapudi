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
            
            <div className = "row justify-content-center project_item_div">
                <img 
                    src= { props.project.thumbnailLocation } 
                    alt= { props.project.title }
                    width=  { props.project.status === "ongoing" ? "320px" : "272px" }  
                    height= { props.project.status === "ongoing" ? "227px" : "193px" } 
                    onClick = {props.onClick}
                />
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