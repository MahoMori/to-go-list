import { useLocation, Navigate } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <h3>Loading.....</h3>;
  }

  if (!loggedIn) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
