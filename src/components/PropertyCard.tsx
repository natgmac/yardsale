import React from 'react';
import { PropertyListing } from '../types/PropertyTypes';

interface PropertyCardProps {
  property: PropertyListing;
  onSelect: (property: PropertyListing) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  return (
    <div className="property-card" onClick={() => onSelect(property)}>
      <h3>{property.propertyType}</h3>
      <div className="price">{property.askingPrice}</div>
      
      <div className="metrics">
        <div>Lot Size: {property.propertyMetrics.lotSize}</div>
        <div>Buildable Area: {property.propertyMetrics.buildableArea}</div>
      </div>

      <div className="zoning">
        <h4>Zoning Details</h4>
        <div>District: {property.zoning.district}</div>
        <div>Allowed Units: {property.zoning.allowedUnits}</div>
      </div>

      <div className="utilities">
        <h4>Utilities</h4>
        <ul>
          {property.utilities.hasWater && <li>Water</li>}
          {property.utilities.hasSewer && <li>Sewer</li>}
          {property.utilities.hasGas && <li>Gas</li>}
        </ul>
      </div>

      <div className="development-rights">
        <h4>Development Rights</h4>
        <div>Type: {property.developmentRights.type}</div>
        {property.developmentRights.term && (
          <div>Term: {property.developmentRights.term}</div>
        )}
      </div>
    </div>
  );
}; 