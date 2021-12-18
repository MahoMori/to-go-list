import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/main-page";

function App() {
  return (
    <div className="App">
      <MainPage />
      {/* <Routes>
        <Route exact path="/" component={MainPage} />
      </Routes> */}
    </div>
  );
}

export default App;
