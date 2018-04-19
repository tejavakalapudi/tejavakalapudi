const authDefault = {
    isAuthorized : false,
    message : "You have no access for this page (or) try entering your user credentials again!!"
};

const authorizedUsers = [
    {
        user : "ravi",
        pass : "09401a04b3"
    }
];

export default ( state = authDefault, action ) => {

    switch( action.type ){

        case "SET_AUTH_FIELD" : {

            let isAuthorized = false, 
            message = "You have no access for this page (or) try entering your user credentials again!!";

            authorizedUsers.forEach( ( userInfo ) => {

                if( ( action.userName === userInfo.user ) && ( action.password === userInfo.pass ) ) {

                    isAuthorized = true;
                    message = "Enjoy the Admin Rights!";  

                } 

            });

            return { isAuthorized, message }
        }

        default:
        return state;
    }   
       
};