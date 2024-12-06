import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";
import { useMediaQuery } from "react-responsive";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for missing markers in deployed version
L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const RestaurantMap = () => {
  const restaurantPosition = [11.612071586784412, 37.427283143631335]; // Restaurant location (latitude, longitude)

  // Detect screen size for mobile
  const isMobile = useMediaQuery({ query: "(max-width: 868px)" });

  const Routing = () => {
    const map = useMap();

    useEffect(() => {
      if (!map) return;

      const control = L.Routing.control({
        waypoints: [
          null, // User's location will be detected automatically
          L.latLng(restaurantPosition), // Restaurant's location
        ],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
      }).addTo(map);

      // Detect user's current location
      map.locate({ setView: true, maxZoom: 10 });
      map.on("locationfound", (e) => {
        control.setWaypoints([
          L.latLng(e.latlng),
          L.latLng(restaurantPosition),
        ]);
      });

      return () => {
        map.removeControl(control);
      };
    }, [map]);

    return null;
  };

  return (
    <div className="relative">
      {/* Render info panel only on non-mobile screens */}
      {!isMobile && (
        <div className="info-panel absolute top-0 left-0 bg-white p-4 shadow-md">
          {/* Add start place and destination information here */}
          <p>Start Place: Auto-detected</p>
          <p>Destination: Green Gold Restaurant</p>
        </div>
      )}
      <MapContainer
        center={restaurantPosition}
        zoom={15}
        className="h-96 w-full"
        touchZoom={true} // Enable touch zoom for mobile
        scrollWheelZoom={true} // Enable scroll zoom
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={restaurantPosition} interactive={true}>
          <Popup>
            <span>Green Gold Restaurant</span>
          </Popup>
        </Marker>
        <Routing />
      </MapContainer>
    </div>
  );
};

export default RestaurantMap;
