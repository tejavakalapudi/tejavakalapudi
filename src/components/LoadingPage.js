import React from 'react';
import logoImage from "../../public/images/Logo5.png";

class LoadingPage extends React.Component{

    state = {
        time : 0
    }

    render(){

        setTimeout( () => {
            this.setState( {
                time : this.state.time + 1
            });
        }, 1000);

        return(

            <div className="loader">
                <img className="loader__image" src= "/images/loading.gif" />
                <img className="loader__logo" src= { logoImage }/>
                <p>{this.state.time}</p>
            </div>
        
        );
    }

}

export default LoadingPage;