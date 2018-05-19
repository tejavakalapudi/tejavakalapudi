import React from "react";
import ProjectForm from "./ProjectForm";
import { connect } from "react-redux";
import { startEditProject } from "../actions/projects";

const EditProjectPage = ( props ) => ( 
    <div> 
       <ProjectForm
            project = { props.project } 
            onSubmit = { ( project ) => {

                props.dispatch( startEditProject( props.project.id, project ) );
                props.history.push("/projects");
                
            }}
       />
    </div>
);

const mapStateToProps = ( state, props ) => {

    return{
        project : state.projects.find( ( project ) => project.id === props.match.params.id )
    };

}

export default connect( mapStateToProps )( EditProjectPage );