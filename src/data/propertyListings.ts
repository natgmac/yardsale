import { PropertyListing } from '../types/PropertyTypes';

export const propertyListings: PropertyListing[] = [
  {
    id: 1,
    position: [43.6591, -70.2568],
    owner: "Alice Johnson",
    propertyType: "Vacant Lot",
    askingPrice: "$150,000",
    potential: "High potential for ADU or infill development",
    description: "Located in a rapidly developing neighborhood, close to public transit and community amenities.",
    zoning: {
      district: "R-5",
      allowedUnits: 4,
      setbacks: {
        front: 20,
        back: 20,
        sides: [10, 10]
      }
    },
    utilities: {
      hasWater: true,
      hasSewer: true,
      hasGas: false
    },
    developmentRights: {
      type: "land-lease",
      term: "99-year",
      restrictions: []
    },
    propertyMetrics: {
      lotSize: "5000 sq ft",
      buildableArea: "2500 sq ft",
      maxHeight: "35 ft"
    }
  },
  // ... Add more properties with the enhanced structure
]; 