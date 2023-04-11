'use client';

import { useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export default function Browse() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyChXfJ4hhbLu-8k7JDP3H9BojfpR9SvArc",
    });

    if (!isLoaded) 
        return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    // Sets the center at College Ave
    const center = useMemo(() => ({ lat: 40.50098, lng: -74.44740 }), []);
    // Might want to move below line to CSS later
    const containerStyle = { width: '100%', height: '100vh' };

    return (
        <GoogleMap 
            zoom={15} 
            center={center} 
            mapContainerStyle={containerStyle}
        >

        * Child components like markers will go in here later */
        <></>

        </GoogleMap>
    );
}
