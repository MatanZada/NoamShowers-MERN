import { useEffect } from "react";
import { useState } from "react";
import { useContext, createContext } from "react";
import { userRequest } from "../requestMethods";
import usersService from "../services/usersService";

export const authContext = createContext(null);
authContext.displayName = "auth-context";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(usersService.getUser());

  const [userData,setUserData] = useState()
  const refreshUser = () => {
    setUser(usersService.getUser());
  };

  const createUser = (user) => {
    return usersService.createUser(user);
  };

  const login = async (credentials) => {
    const response = await usersService.loginUser(credentials);
    refreshUser();
    return response;
  };

  const logout = () => {
    usersService.logout();
    refreshUser();
  };

  useEffect(() => {
    refreshUser();
  }, []);

  

  useEffect(() => {
    if(user) {
      const fetchUserData = async () => {
        try {
            const  userDataResponse =  await userRequest.get(`users/find/${user._id}`)
            setUserData(userDataResponse.data);
        }catch(e) {
          setUserData(null)
        }
      }
      fetchUserData()
    }
  },[user])

  return (
    <authContext.Provider value={{ createUser, login, logout, user,userData }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
