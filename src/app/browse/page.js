'use client';

import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 40.500979167976396, 
  lng: -74.44743886129068
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyChXfJ4hhbLu-8k7JDP3H9BojfpR9SvArc"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
