export type Coordinates = [number, number];

export interface Zoning {
  district: string;
  allowedUnits: number;
  setbacks: {
    front: number;
    back: number;
    sides: [number, number];
  };
}

export interface Utilities {
  hasWater: boolean;
  hasSewer: boolean;
  hasGas: boolean;
}

export interface DevelopmentRights {
  type: 'land-lease' | 'condo' | 'LLC';
  term?: string;
  restrictions: string[];
}

export interface PropertyMetrics {
  lotSize: string;
  buildableArea: string;
  maxHeight: string;
}

export interface PropertyListing {
  id: number;
  position: Coordinates;
  owner: string;
  propertyType: string;
  askingPrice: string;
  potential: string;
  description: string;
  zoning: Zoning;
  utilities: Utilities;
  developmentRights: DevelopmentRights;
  propertyMetrics: PropertyMetrics;
} 