import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.util";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Grid from "@mui/material/Grid";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  headerLeft: {},
  headerRight: {
    float: "right",
    display: "flex",
    justifyContent: "space-around",
  },
}));

const HeaderContainer = () => {
  const classes = useStyles();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("signed out successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#929292" }}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item sm={12} md={8} sx={{ width: "100%" }}>
              <Typography variant="h6" component="div">
                TO GO / TO DO in Vancouver
              </Typography>
            </Grid>
            <Grid item sm={6} md={2} sx={{ width: "50%", marginTop: "7px" }}>
              <Typography variant="summary" component="div" sx={{}}>
                Signed in as: Maho
              </Typography>
            </Grid>
            <Grid item sm={6} md={2} sx={{ width: "50%" }}>
              <Button color="inherit" onClick={handleSignOut}>
                Sign out
              </Button>
            </Grid>
          </Grid>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" component="div">
            TO GO / TO DO in Vancouver
          </Typography> */}
          {/* <Typography
            variant="caption"
            component="div"
            sx={{ flexGrow: 1}}
          >
            Signed in as: Maho
          </Typography> */}
          {/* <Button color="inherit">Logout</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderContainer;
