import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import useMediaQuery from "@mui/material/useMediaQuery";

import ListTabPanel from "../list-tab/ListTabPanel";
import NavBar from "./NavBar";

import usersContext from "../users-test/users";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function NameTabPanel() {
  const users = React.useContext(usersContext);

  const matches = useMediaQuery("(max-width:600px)");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Grid container>
        {matches ? (
          <Grid item sm={12} sx={{ width: "100%" }}>
            <NavBar>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  height: "calc(100vh - 64px)",
                  margin: "15px 0",
                }}
              >
                {users.map((user) => (
                  <Tab label={user} />
                ))}
                {/* <Tab label="Maho" />
                <Tab label="Tori" /> */}
              </Tabs>
            </NavBar>
          </Grid>
        ) : (
          <Grid item md={2}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: "divider",
                height: "calc(100vh - 64px)",
              }}
            >
              <Tab label="Maho" />
              <Tab label="Tori" />
            </Tabs>
          </Grid>
        )}

        <Grid item md={10} sx={matches ? { width: "100%" } : { width: "85%" }}>
          <TabPanel value={value} index={0}>
            <ListTabPanel />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Grid>
      </Grid>
    </Box>
  );
}
