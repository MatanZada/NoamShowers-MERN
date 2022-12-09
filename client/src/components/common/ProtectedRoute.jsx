import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

//If the user is not logged in, redirect to the sign in page , @returns The children of the component.

const ProtectedRoute = ({ children, onlyBiz = false }) => {
  const { userData } = useAuth();

  if (!userData || (onlyBiz && !userData.biz)) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;
