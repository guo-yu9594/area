import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any): JSX.Element => {
  const jwt = localStorage.getItem("token");
  return jwt ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
