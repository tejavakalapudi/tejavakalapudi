import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GoogleMaps = withScriptjs( withGoogleMap( ( props ) => ( 
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 17.486014, lng: 78.373993 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 17.486014, lng: 78.373993 }} />}
    </GoogleMap>
)));

export default GoogleMaps;
