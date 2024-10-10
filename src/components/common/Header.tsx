import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const StickyAppBar = styled(AppBar)(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.drawer + 1,
}));

function Header() {
  return (
    <div>
      <StickyAppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book Reviews
          </Typography>
        </Toolbar>
      </StickyAppBar>
        {/* TODO:
        To add -
          1. Search bar
          2. Login/Logout button
          3. User profile
        */}
    </div>
  );
}

export default Header;