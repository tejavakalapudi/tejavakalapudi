import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const MapsComponent = ( localProps ) => {

    const GoogleMaps = withScriptjs( withGoogleMap( ( props ) => ( 
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: localProps.lat, lng: localProps.lng }}
        >
    
            {   props.isMarkerShown && 
                <Marker 
                    position={{ lat: localProps.lat, lng: localProps.lng }}
                    onClick={ localProps.onClick } 
                >
                    {   
                        <InfoWindow>
                            <div style={{width:"200px",fontSize:"1rem"}}>
                                <p>{ localProps.title }</p>
                                <p>{ localProps.address }</p>
                            </div>
                        </InfoWindow>
                    }
                </Marker>
            }
    
        </GoogleMap>
    )));

    return(
        <GoogleMaps 
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbmqWgEH7KiHfYC6DJMjScUbWlcPb1XME&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            
        />
    );

}

export default MapsComponent;
