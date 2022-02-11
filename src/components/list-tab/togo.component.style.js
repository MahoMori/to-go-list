import { styled } from "@mui/material/styles";

// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
// import Checkbox from "@mui/material/Checkbox";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";

// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import WebIcon from "@mui/icons-material/Web";
// import LanguageIcon from "@mui/icons-material/Language";

// import LooksOneIcon from "@mui/icons-material/LooksOne";
// import LooksTwoIcon from "@mui/icons-material/LooksTwo";
// import Looks3Icon from "@mui/icons-material/Looks3";

// -------------------------------------------

export const CustomContainerBox = styled(Box)(({ theme }) => ({
  display: "grid",
  margin: "20px 0",

  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "80% 20%",
  },
}));

export const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  textAlign: "left",
  fontSize: "18px",
}));

export const CustomIconBox = styled(Box)(({ theme }) => ({
  //   backgroundColor: "pink",
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "repeat(3, 1fr)",

  //   [theme.breakpoints.up("xs")]: {
  //     gridTemplateRows: "repeat(3, 1fr)",
  //   },

  //   [theme.breakpoints.up("sm")]: {
  //     gridTemplateRows: "none",
  //     gridTemplateColumns: "repeat(3, 1fr)",
  //   },
}));

// export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
//     backgroundColor: "skyblue",
// }));

export const CustomModeEditIcon = styled(ModeEditIcon)(({ theme }) => ({
  //   backgroundColor: "skyblue",

  margin: "0 auto",
  color: "#329932",
  fontSize: 30,
  cursor: "pointer",
  transition: "color 0.2s",
  "&:hover": {
    color: "#84c184",
  },
}));

export const CustomDeleteForeverIcon = styled(DeleteForeverIcon)(
  ({ theme }) => ({
    // backgroundColor: "skyblue",

    margin: "0 auto",
    color: "red",
    fontSize: 30,
    cursor: "pointer",
    transition: "color 0.2s",
    "&:hover": {
      color: "#ff9999",
    },
  })
);
