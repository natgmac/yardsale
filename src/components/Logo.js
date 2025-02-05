import React from 'react';

export const Logo = ({ height = '50px', width = 'auto' }) => {
  return (
    <img 
      src={process.env.PUBLIC_URL + '/yardsale_logo.JPG'} 
      alt="Yardsale Logo" 
      style={{ height, width, objectFit: 'contain' }}
    />
  );
}; 