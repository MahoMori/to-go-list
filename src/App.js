import "./App.css";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/route/PrivateRoute";
import SignUpLoginPage from "./components/signUp-logIn-page";
import MainPage from "./components/main-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUpLoginPage />} />
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
