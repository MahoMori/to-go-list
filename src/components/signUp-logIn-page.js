import React from "react";

import SignUp from "./signup/signup.component";
import LogIn from "./login/login.component";

import { CustomBox, CustomGridContainer } from "./signUp-logIn.style";

import Grid from "@mui/material/Grid";

const SignUpLoginPage = () => {
  return (
    <CustomBox>
      <CustomGridContainer container>
        <Grid item xs={12} md={6}>
          <SignUp />
        </Grid>

        <Grid item xs={12} md={6}>
          <LogIn />
        </Grid>
      </CustomGridContainer>
    </CustomBox>
  );
};

export default SignUpLoginPage;
