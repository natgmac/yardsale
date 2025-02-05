import React from 'react';
import { PropertyListing } from '../types/PropertyTypes';
import { calculateFeasibility } from '../utils/feasibilityCalculator';

interface FeasibilityAnalysisProps {
  property: PropertyListing;
}

export const FeasibilityAnalysis: React.FC<FeasibilityAnalysisProps> = ({ property }) => {
  const feasibility = calculateFeasibility(property);

  return (
    <div className="feasibility-analysis">
      <h3>Development Feasibility</h3>
      
      <div className="feasibility-metrics">
        <div>
          <label>Maximum Units:</label>
          <span>{feasibility.maxUnits}</span>
        </div>
        
        <div>
          <label>Estimated Value:</label>
          <span>${feasibility.estimatedValue.toLocaleString()}</span>
        </div>
      </div>

      {feasibility.developmentConstraints.length > 0 && (
        <div className="constraints">
          <h4>Development Constraints:</h4>
          <ul>
            {feasibility.developmentConstraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}; 