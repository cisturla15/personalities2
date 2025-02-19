import { useState } from 'react';
import { carBrands } from './Data';
import { Box, Button, IconButton, Typography, Collapse } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import './App.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < carBrands.length - 1;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handleBackClick() {
    setIndex(index > 0 ? index - 1 : carBrands.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const member = carBrands[index];

  return (
    <Box 
      sx={{
        width: '300px',
        margin: 'auto',
        padding: '25px',
        textAlign: 'center',
        borderRadius: '10px',
        boxShadow: 3,
        bgcolor: 'white',
      }}
      className="gallery-container"
    >
      <Typography variant="h4" fontWeight="bold" color="#333">
        JDM Car Brands
      </Typography>
      <Typography variant="h6" fontWeight="bold" color="#666">
        IAN TURLA - C-PEITEL3
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 5 }}>
        <Button 
          variant="contained" 
          sx={{ bgcolor: '#444', '&:hover': { bgcolor: '#222' } }} 
          onClick={handleBackClick}
        >
          Back
        </Button>
        <Button 
          variant="contained" 
          sx={{ bgcolor: '#222', '&:hover': { bgcolor: '#111' } }} 
          onClick={handleNextClick}
        >
          Next
        </Button>
      </Box>



      <Typography variant="h5" sx={{ mt: 2, color: '#333' }}>
        {member.name}
      </Typography>
      <Typography variant="subtitle1" color="#666">
        {index + 1} of {carBrands.length}
      </Typography>

      <IconButton 
        onClick={handleMoreClick} 
        sx={{ mt: 1, color: '#444', transition: 'transform 0.3s ease' }}
        style={{ transform: showMore ? 'rotate(180deg)' : 'rotate(0deg)' }}
      >
        <ExpandMore />
      </IconButton>

      <Collapse in={showMore} timeout="auto">
        <Typography variant="body1" sx={{ mt: 1, px: 2, color: '#666' }}>
          {member.description}
        </Typography>
      </Collapse>

      <Box sx={{ mt: 2 }}>
        <img 
          className="car-image"
          src={member.url} 
          style={{ 
            width: '100%', 
            borderRadius: '10px', 
            border: '3px solid #000', 
            transition: 'transform 0.3s ease, box-shadow 0.3s ease' 
          }} 
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </Box>
    </Box>
  );
}