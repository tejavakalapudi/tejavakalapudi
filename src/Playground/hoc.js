// Higher Order Component (HOC)

import React from "react";
import ReactDOM from "react-dom";

const Info = ( props ) => (
    <div>
        <h1> Info </h1>
        <p> The Info is : { props.info }</p>
    </div>
);

const requireAuthetication = ( WrappedComponent ) => {
    return ( props ) => (
        <div>
            { props.isAuthenticated && <p> Please login to continue! </p> }
            <WrappedComponent {...props} />
        </div>
    );
}

const AuthInfo = requireAuthetication( Info );

ReactDOM.render( <AuthInfo info = "Here is the info" isAuthenticated = { true } /> , document.getElementById( "app" ) );