import "./App.css";
import HeaderContainer from "./components/header/header.container";
import NameTabPanel from "./components/name-tab/NameTabPanel";
// import ListTabPanel from "./components/list-tab/ListTabPanel";

// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import { CssBaseline } from "@material-ui/core";

function App() {
  // const darkTheme = createMuiTheme({
  //   palette: {
  //     type: "dark",
  //   },
  // });

  return (
    <div className="App">
      {/* <ThemeProvider theme={darkTheme}>
        <CssBaseline /> */}
      <HeaderContainer />
      <NameTabPanel />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
