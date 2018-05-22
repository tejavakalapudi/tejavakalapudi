import uuid from "uuid";
import { database, storageRef } from "../firebase/firebase";

export const addProject = ( project ) => ({
    type : "ADD_PROJECT",
    project
});

export const startAddProject = ( projectData = {}, projectStorage = {} ) => {
    
    return ( dispatch ) => {
        const {
            id = "", 
            title = "",
            subTitle = "",
            overview = "", 
            locationMapInfo = "",
            address = "",  
            specs = "",
            amenities = "",
            brochure = "", 
            createdOn = 0,
            status = "",
            thumbnailLocation = "",
            imageLocation = "",
            floorPlans = "",
            storageRefId = ""
        } = projectData;

        return database.ref( "projects" ).push( projectData ).then( (ref) => {

            dispatch( addProject({
                id : ref.key,
                ...projectData
            }));

        })
        .catch( ( error ) => {

            console.log( "Add Project failed: " + error.message );

        });

    }
};

export const removeProject= ( { id } = {} ) => ({
    type : "REMOVE_PROJECT",
    id    
});

export const startRemoveProject = ( { id, storageRefId } = {} ) => {

    return ( dispatch ) => {

        return database.ref( `projects/${id}` ).remove().then(() => {

            dispatch( removeProject({ id }));

            console.log("Successfully removed a project" );
/*
            const projectsRef = storageRef.child( "projects" );

            console.log("Successfully removed a project", projectsRef );

            const deleteRef = projectsRef.child( storageRefId );
            // Delete the file
            deleteRef.delete().then(function() {
                
                console.log( "Project removed from storage!" );

            }).catch(function(error) {
                
                console.log( "Project removal from storage failed with ", error );

            });
*/           
        })
        .catch( (error) => {

            console.log("Remove failed: " + error.message);

        });

    }

};

export const editProject = ( id, project ) => ({
    type : "EDIT_PROJECT",
    id,
    project    
});

export const startEditProject = ( id, project ) => {

    return ( dispatch ) => {

        return database.ref( `projects/${ id }` ).update( project ).then( () => {

            dispatch( editProject( id, project ) );

        })
        .catch( ( error ) => {

            console.log( "Edit failed: " + error.message );

        });

    }

};

// SET_PROJECTS
export const setProjects = ( projects = [] ) => ({
    type : "SET_PROJECTS",
    projects    
});

// startSetExpenses

export const startSetProjects = () => {
    
    return( dispatch ) => {

        var event = new Date();

        console.log( "Request projects from database at ", event.toTimeString());

        return database.ref( "projects" ).once( "value")

            .then(( snapshot ) => {

                    var event = new Date();

                    console.log( "Reorganizing projects from database response at ", event.toTimeString() );

                    const projects = [];
            
                    snapshot.forEach(( project ) => {
            
                        projects.push({
                            id : project.key,
                            ...project.val()
                        })
            
                    })
            
                    dispatch( setProjects( projects ) );
            
                }
            )
            .catch( ( e ) => {

                console.log( "Fetching projects data has failed with error ", e );
                
            });
    };

};