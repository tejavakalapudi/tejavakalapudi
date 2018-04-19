
export const checkUserAuth = ( { userName, password } ) => {

    return {
        type : "SET_AUTH_FIELD",
        userName,
        password
    };

};