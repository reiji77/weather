
import React from 'react';

const LocationButton = ({ getLocation }) => {
  return (
    <button className='loc-button' onClick={getLocation}>
      Allow Location?
    </button>
  );
};

export default LocationButton;