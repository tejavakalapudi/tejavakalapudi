import React from 'react';
import logoImage from "../../public/images/Logo5.png";

const LoadingPage = () => ( 

    <div className="loader">
        <img className="loader__image" src= "/images/loading.gif" />
        <img className="loader__logo" src= { logoImage }/>
    </div>
        
);

export default LoadingPage;