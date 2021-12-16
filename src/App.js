import "./App.css";
import HeaderContainer from "./components/header/header.container";
import ListTabPanel from "./components/list-tab/ListTabPanel";

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
      <ListTabPanel />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
