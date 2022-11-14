import { Info } from "@material-ui/icons";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const withUser = (Component) => {
  return function WithUser() {
    const { userData } = useAuth();

    if (userData) {
      return <Component user={userData} />;
    }
    if (userData === undefined) return <div>Loading....</div>;
    return <Navigate to="/signin" />;
  };
};

function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.firstName}</h1>
      <h2>{user.lastName}</h2>
      <h3>{user.email}</h3>
    </div>
  );
}

export default withUser(UserProfile);
