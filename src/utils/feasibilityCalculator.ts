import { PropertyListing } from '../types/PropertyTypes';

interface FeasibilityResult {
  maxUnits: number;
  estimatedValue: number;
  developmentConstraints: string[];
}

export const calculateFeasibility = (property: PropertyListing): FeasibilityResult => {
  // Basic feasibility calculation
  const maxUnits = property.zoning.allowedUnits;
  const avgUnitValue = 250000; // This would come from market data
  
  const constraints: string[] = [];
  
  // Check for basic constraints
  if (!property.utilities.hasWater) {
    constraints.push("No water connection");
  }
  if (!property.utilities.hasSewer) {
    constraints.push("No sewer connection");
  }
  
  // Calculate buildable area constraints
  const buildableAreaSqFt = parseInt(property.propertyMetrics.buildableArea.split(' ')[0]);
  if (buildableAreaSqFt < 1000) {
    constraints.push("Limited buildable area");
  }

  return {
    maxUnits,
    estimatedValue: maxUnits * avgUnitValue,
    developmentConstraints: constraints
  };
}; 