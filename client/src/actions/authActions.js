import axios from 'axios';
import { returnErrors } from './errorActions';
import setAuthToken from '../utils/setAuthToken';

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from './types';

// Check token & load user
export const loadUser = () => async dispatch => {
  try {
    if(!localStorage.token) {
      return;
    }

    setLoading();
    setAuthToken(localStorage.token);
    const config = { headers: { 'Content-Type': 'application/json' }};

    const res = await axios.get('/api/auth', config );

    dispatch({
        type: USER_LOADED,
        payload: res.data
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Login User
export const login = (user) => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' }};

  try {
    setLoading();

    const res = await axios.post('/api/auth', user, config);

    dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    });
  } catch (error) {
      dispatch(
        returnErrors(error.response.data, error.response.status, 'LOGIN_FAIL')
      );
      dispatch({
          type: LOGIN_FAIL
      });
  }
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Set loading to true
export const setLoading = () => {
  return {
      type: USER_LOADING
  };
};
