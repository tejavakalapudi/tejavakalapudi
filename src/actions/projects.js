import uuid from "uuid";
import database from "../firebase/firebase";

export const addProject = ( project ) => ({
    type : "ADD_PROJECT",
    project
});

export const startAddProject = ( projectData = {} ) => {
    
    return ( dispatch ) => {
        const {
            id = "", 
            title = "",
            subTitle = "",
            overview = "", 
            floorPlans = "",  
            locationMapInfo = "",
            address = "",  
            specs = "",
            amenities = "",
            brochure = "", 
            createdOn = 0,
            imageLocation = "",
            thumbnailLocation = "",
            status = "" 
        } = projectData;

        return database.ref( "projects" ).push( projectData ).then((ref) => {
            dispatch( addProject({
                id : ref.key,
                ...projectData
            }));
        });
    }
};

export const removeProject= ( { id } = {} ) => ({
    type : "REMOVE_PROJECT",
    id    
});

export const startRemoveProject = ( { id } = {} ) => {

    return ( dispatch ) => {

        return database.ref( `projects/${id}` ).remove().then(() => {

            console.log("Successfully removed a project");

            dispatch( removeProject({ id }));
            
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