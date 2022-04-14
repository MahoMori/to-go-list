import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.util";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const HeaderContainer = ({ currentUser }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Signed out successfully.");
    } catch (error) {
      console.log(error.message);
      alert("Something went wrong. Please try again.");
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
              <Typography variant="summary" component="div">
                Signed in as:{" "}
                <span
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {currentUser}
                </span>
              </Typography>
            </Grid>
            <Grid item sm={6} md={2} sx={{ width: "50%" }}>
              <Button color="inherit" onClick={handleSignOut}>
                Sign out
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderContainer;
