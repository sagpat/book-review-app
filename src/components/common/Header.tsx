import React, { useContext } from "react";
import {
  Box,
  Button,
  Typography,
  Toolbar,
  AppBar,
  styled,
} from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";

const StickyAppBar = styled(AppBar)(() => ({
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  position: "fixed",
}));

function Header() {
  const loggedinUser = useAppSelector((state) => state.auth.loggedinUser);
  console.log("loggedinUser", loggedinUser);

  const handleLogin = () => {
    // Add your login logic here
    console.log("Login button clicked");
  };

  return (
    <StickyAppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "-webkit-fill-available",
        }}
      >
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Typography variant="h5">Welcome to Books' Library</Typography>
        </Box>
        <Button color="inherit" onClick={handleLogin}>
          Logout
        </Button>
        {/* TODO:
            To add -
          1. User profile
        */}
      </Toolbar>
    </StickyAppBar>
  );
}

export default Header;
