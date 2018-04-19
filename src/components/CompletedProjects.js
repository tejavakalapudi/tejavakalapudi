import React from "react";

const CompletedProjects = ( props ) => ( 
    <div> 
        <h2> { props.project.title } </h2>
        <p> Located at { props.project.overview } </p> 
    </div> 
);

export default CompletedProjects;