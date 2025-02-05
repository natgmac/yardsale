import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { PropertyCard } from './PropertyCard';
import { FeasibilityAnalysis } from './FeasibilityAnalysis';
import { propertyListings } from '../data/propertyListings';
import { PropertyListing } from '../types/PropertyTypes';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/MapPrototype.css';

// Fix default icon issues
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapPrototype: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const center = propertyListings[0].position;

  const handlePropertySelect = (property: PropertyListing) => {
    setSelectedProperty(property);
  };

  return (
    <div className="map-container">
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: '70vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {propertyListings.map((property) => (
          <Marker 
            key={property.id} 
            position={property.position}
          >
            <Popup>
              <PropertyCard 
                property={property}
                onSelect={handlePropertySelect}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedProperty && (
        <div className="property-details-sidebar">
          <h2>Property Details</h2>
          <PropertyCard 
            property={selectedProperty}
            onSelect={() => {}}
          />
          <FeasibilityAnalysis property={selectedProperty} />
        </div>
      )}
    </div>
  );
};

export default MapPrototype; 