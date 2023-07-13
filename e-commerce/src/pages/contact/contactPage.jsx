import React, { useEffect, useState } from "react";
import Map from "../../components/map/Map";
import "./contactPage.scss";

const ContactPage = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    askForLocationPermission();
  }, []);

  const askForLocationPermission = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(position);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  };
  return (
    <div className="container">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <div className="contact-details">
            <div className="phone">
              <h3>Our contacts</h3>
              <p>XXX-XXX-XXXX</p>
              <p>andrew.nahuelmh@gmail.com</p>
            </div>
            <div className="address">
              <h3>Our Location</h3>
              <p>
                Street viven 1517,
                <br />
                Casarino, Canelones, Uruguay
              </p>
            </div>
          </div>
        </div>
        <div className="map">
          <Map
            userLocation={userLocation}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div style={{ height: `450px`, width: `100%` }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
