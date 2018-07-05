import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import testimonialsReducer from "../reducers/testimonials";
import travelReducer from "../reducers/travelDiaries";
import authReducer from "../reducers/auth";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default() => {

    const store = createStore( 
        combineReducers({
            testimonials : testimonialsReducer,
            travelDiaries : travelReducer,
            authInfo : authReducer
        }),
        composeEnhancers( applyMiddleware( thunk ))
    );
    
    return store;
};