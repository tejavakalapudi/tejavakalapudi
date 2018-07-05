const authDefault = {
    isAuthorized : false,
    message : "Please login to get private access!" 
};

export default ( state = authDefault, action ) => {

    switch( action.type ){

        case "SET_AUTH_FIELD" : {

            let isAuthorized = false, 
            message = "Sorry buddy! Trespassing is not allowed on this page.";

            if( ( action.userName === action.authorizedUser.user ) && ( action.password === action.authorizedUser.pass ) ) {

                isAuthorized = true;
                message = "Welcome back Teja! Keep adding the exciting content.";  

            } 

            return { isAuthorized, message }
        }

        default:
        return state;
    }   
       
};