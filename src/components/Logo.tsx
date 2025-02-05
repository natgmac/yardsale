import React from 'react';

interface LogoProps {
  height?: string;
  width?: string;
}

export const Logo: React.FC<LogoProps> = ({ height = '50px', width = 'auto' }) => {
  return (
    <img 
      src={process.env.PUBLIC_URL + '/yardsale_logo.JPG'} 
      alt="Yardsale Logo" 
      style={{ height, width, objectFit: 'contain' }}
    />
  );
}; 