import React from "react";
import ProjectForm from "./ProjectForm";
import { connect } from "react-redux";
import { startAddProject } from "../actions/projects";

const AddProjectPage = ( props ) => ( 
    <div> 
       <ProjectForm onSubmit = { ( project ) => {
            props.dispatch( startAddProject( project ) );
            props.history.push("/projects");
       }} />
    </div>
);

export default connect()( AddProjectPage );