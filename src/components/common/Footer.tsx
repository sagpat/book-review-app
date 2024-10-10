import React from "react"
import {
    Box,
    Typography
  } from '@mui/material';


function Footer() {
    return (
      <Box
        sx={{
          mt: 8,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          padding: '20px',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Sagar Patil.
        </Typography>
      </Box>
    );
  }

  export default Footer;