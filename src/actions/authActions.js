import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

//REGISTER USER
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("api/users/register", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to Ls
      localStorage.setItem("jwtToken", token);
      //Set token to Auth header
      setAuthToken(token);
      //Decode token to get the user data
      const decode = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decode));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
//LOGIN USER - Get User token

export const loginUser = userData => dispatch => {
  axios
    .post("api/users/login", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to Ls
      localStorage.setItem("jwtToken", token);
      //Set token to Auth header
      setAuthToken(token);
      //Decode token to get the user data
      const decode = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decode));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Set logged in User

export const setCurrentUser = decode => {
  return {
    type: SET_CURRENT_USER,
    payload: decode
  };
};

//Log user out
export const logoutUser = () => dispatch => {
  //Remove token from localstorage
  localStorage.removeItem("jwtToken");

  //Remove auth header
  setAuthToken(false);

  //Set current user to emplty object whihc will aslo set isAutheticated to false
  dispatch(setCurrentUser({}));
};
