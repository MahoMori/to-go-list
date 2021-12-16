import React from "react";

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#262626" }}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h6" component="div">
                TO GO / TO DO in Vancouver
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="caption" component="div">
                Signed in as: Maho
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit">Logout</Button>
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
