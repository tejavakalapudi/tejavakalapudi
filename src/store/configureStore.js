import { createStore, combineReducers } from "redux";
import projectsReducer from "../reducers/projects";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

export default() => {

    const store = createStore( 
        combineReducers({
            projects : projectsReducer,
            filters : filtersReducer,
            authInfo : authReducer
        })
    );
    
    return store;
};