export const checkUserAuth = ( { userName, password } ) => {

    const authorizedUser = {
        user : "tejavakalapudi",
        pass : "09401a04b3"
    };
    
    return {
        type : "SET_AUTH_FIELD",
        userName,
        password,
        authorizedUser
    };

};