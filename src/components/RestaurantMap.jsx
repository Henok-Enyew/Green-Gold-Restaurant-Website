import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";

const RestaurantMap = () => {
  const restaurantPosition = [11.612071586784412, 37.427283143631335]; // Restaurant location (latitude, longitude)

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
    <MapContainer
      center={restaurantPosition}
      zoom={15}
      className="h-96 w-full"
      //   style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <TileLayer
        url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy; <a href="https://www.esri.com/">ESRI</a> contributors'
      /> */}
      <Marker position={restaurantPosition} interactive={true}>
        <Popup>
          <span> Green Gold Restaurant</span>
        </Popup>
      </Marker>
      <Routing />
    </MapContainer>
  );
};

export default RestaurantMap;
