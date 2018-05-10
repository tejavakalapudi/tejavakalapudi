const projectsDefault = [];

export default ( state = projectsDefault, action ) => {
    switch( action.type ){

        case "ADD_PROJECT" : {
            return [ ...state, action.project  ]
        }

        case "REMOVE_PROJECT" : {
            
            return state.filter( ( { id } ) => id !== action.id );
        }

        case "EDIT_PROJECT" : {

            return state.map( ( project ) => {

                if( project.id === project.id ){

                    return { ...project, ...action.project };

                }

                return state;
            });
        }

        case "SET_PROJECTS" : {
            return action.projects;
        }

        default:
        return state;
    }      
};