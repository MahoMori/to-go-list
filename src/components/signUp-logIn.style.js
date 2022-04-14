import { styled } from "@mui/material/styles";

// signUp-logIn-page
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// signup.component
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// -------------------------------------------
// signUp-logIn-page
export const CustomBox = styled(Box)(() => ({
  height: "100vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const CustomGridContainer = styled(Grid)(() => ({
  width: "90%",
  height: "85%",
}));

// signup.component
export const CustomCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "90%",
    height: "85%",

    margin: "3rem auto",
  },

  [theme.breakpoints.up("lg")]: {
    width: "80%",
    height: "80%",

    margin: "3rem auto",
  },

  [theme.breakpoints.up("xl")]: {
    height: "60%",
  },
}));

export const CustomTextFiled = styled(TextField)(() => ({
  width: "90%",
  margin: "0.5rem 0",
}));

export const CustomButton = styled(Button)(() => ({
  marginTop: "0.5rem",
}));

export const CustomBoxLogIn = styled(Box)(() => ({
  padding: "1rem 2rem 0",
  // width: "85%",
}));
