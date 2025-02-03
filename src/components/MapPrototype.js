// src/components/MapPrototype.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon issues with Webpack and React
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Dummy data specific to Yardsale listings
const dummyData = [
  {
    id: 1,
    position: [43.6591, -70.2568],
    owner: "Alice Johnson",
    propertyType: "Vacant Lot",
    askingPrice: "$150,000",
    potential: "High potential for ADU or infill development",
    description: "Located in a rapidly developing neighborhood, close to public transit and community amenities."
  },
  {
    id: 2,
    position: [43.6600, -70.2600],
    owner: "Bob Smith",
    propertyType: "Single-Family Home",
    askingPrice: "$300,000",
    potential: "Opportunity to add an accessory dwelling unit (ADU)",
    description: "Mature neighborhood with established community support and local charm."
  },
  {
    id: 3,
    position: [43.6580, -70.2550],
    owner: "Carol Lee",
    propertyType: "Multi-Family Conversion Opportunity",
    askingPrice: "$500,000",
    potential: "Convertible to mixed-ownership with infill development rights",
    description: "Strategically located near downtown with strong rental demand and redevelopment incentives."
  }
];

const MapPrototype = () => {
  // Center the map on the first listing
  const center = dummyData[0].position;

  return (
    <MapContainer center={center} zoom={14} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {dummyData.map((listing) => (
        <Marker key={listing.id} position={listing.position}>
          <Popup>
            <strong>Owner:</strong> {listing.owner} <br />
            <strong>Property Type:</strong> {listing.propertyType} <br />
            <strong>Asking Price:</strong> {listing.askingPrice} <br />
            <strong>Potential:</strong> {listing.potential} <br />
            <strong>Description:</strong> {listing.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapPrototype;
