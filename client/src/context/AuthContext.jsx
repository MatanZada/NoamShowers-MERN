import { useEffect } from "react";
import { useState } from "react";
import { useContext, createContext } from "react";
import usersService from "../services/usersService";
import axios from "axios";
import { BASE_URL } from "../requestMethods";
import httpService from "../services/httpService";
import { useDispatch } from "react-redux";
import { cartFetch, setUserId } from "../redux/cartRedux";
export const authContext = createContext(null);
authContext.displayName = "auth-context";

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState()
  const dispatch = useDispatch()
  const [token, setToken] = useState(localStorage.getItem('token'))
  const createUser = (user) => {
    return usersService.createUser(user);
  };

  const login = async (credentials) => {
    const token = await usersService.loginUser(credentials);
    setToken(token)
    await fetchUserData(localStorage.getItem('token'))
  };

  const fetchUserData = async (t = token) => {
    try {
      const userDataResponse = await httpService.get(`users/find`, { headers: { 'x-auth-token': `Bearer ${t}` } })
      setUserData(userDataResponse.data);
      return userDataResponse.data
    } catch (e) {
      setUserData(null)
    }
  }

  const logout = () => {
    usersService.logout();
    setToken(undefined)
    setUserData(undefined)
  };

  useEffect(() => {
    if (token) {
      fetchUserData().then((data) => {
        dispatch(cartFetch(data._id))
      }).catch(console.log)
    }
  }, [token])

  return (
    <authContext.Provider value={{ createUser, login, logout, userData }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
