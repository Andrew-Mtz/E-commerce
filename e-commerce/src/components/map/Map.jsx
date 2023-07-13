import React, { useEffect } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = withGoogleMap(({ userLocation }) => {
  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: -34.751064, lng: -56.070288 }}
    >
      <Marker
        position={{ lat: -34.751064, lng: -56.070288 }}
        title="Here is my home!"
      />
      {userLocation && (
        <Marker
          position={{
            lat: userLocation.coords.latitude,
            lng: userLocation.coords.longitude,
          }}
          title="your location"
        />
      )}
    </GoogleMap>
  );
});

export default Map;
