import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { xs: '50px' }
      }}
      position="relative"
    >
      <Typography fontWeight={600} fontSize="26px" color="#FF2526" mb={2}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={600}
        sx={{
          fontSize: { lg: '40px', xs: '35px' }
        }}
        mb={2}
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography fontSize="18px" lineHeight="35px" mb={2}>
        Check out the most effective exercises personalized to you
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          background: '#ff2526',
          padding: '10px'
        }}
      >
        Explore Exercise
      </Button>
      <Typography
        fontWeight="600"
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
