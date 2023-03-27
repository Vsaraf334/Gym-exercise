import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="50px" bgcolor="#fff3f4">
      <Stack gap="20px" alignItems="center" px="20px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px" textTransform="capitalize">
          Made with 💖 by Shady
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
