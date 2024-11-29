import React, { useState } from 'react';

import { locations as cardLocations } from 'Data/mock-data';
import CarouselCard from './CarouselCard';
import { Box} from '@mui/material';
import './LocationCards.css'
const LocationCards = () => {
  const [cards] = useState(cardLocations);
  
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Box container className="image-container">
        {cards.map((location) => {
          return (
            <Box className="image-min-container" key={location.id}  >
              <CarouselCard location={location} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default LocationCards;