import React from "react";
import { connect } from "react-redux";

class LanderPage extends React.Component {

    state = {
        minHeight : window.innerHeight
    }

    isMobileDevice = () => {
        return ( typeof window.orientation !== "undefined" ) || ( navigator.userAgent.indexOf( 'IEMobile' ) !== -1 );
    };

    resizeWelcomeDiv = () =>{

        const welcomeDiv = document.getElementById( "landingDiv" );

        if ( welcomeDiv ){
            this.setState( {
                minHeight: window.innerHeight
            });    
        }

    }

    render(){

        if( !this.isMobileDevice() ){
            window.addEventListener( 'resize', this.resizeWelcomeDiv );
        }

        return (
            <div className = "lander__container" id = "landingDiv" style={{ minHeight: this.state.minHeight }}>
                <div className = "lander__container-image" >
                    <div className = "lander__overlay"></div>         
                </div>
                <div className = "lander__container-logo">
                    <div className = "lander__title" >tejavakalapudi.</div>
                    <div className = "lander__subtitle" >just another software developer</div>    
                </div>
            </div>
        );
    }
}; 


const mapStateToProps = ( store ) => {

    return {}

}

export default connect( mapStateToProps )( LanderPage );