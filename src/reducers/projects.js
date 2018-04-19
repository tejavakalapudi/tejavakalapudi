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

            return state.map( ( expense ) => {

                if( expense.id === action.id ){

                    return { ...expense, ...action.expense };

                }

                return state;
            });
        }

        default:
        return state;
    }      
};