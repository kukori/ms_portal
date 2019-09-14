import axios from 'axios';
import { returnErrors } from './errorActions';
import setAuthToken from '../utils/setAuthToken';
import { GET_ADMINS, ADD_ADMIN, DELETE_ADMIN, SET_CURRENT_ADMIN, CLEAR_CURRENT_ADMIN, UPDATE_ADMIN, SET_LOADING } from './types';

// Check token & load user
export const getAdmins = () => async dispatch => {
    try {
        if(!localStorage.token) {
            return;
        }

        setLoading();
        setAuthToken(localStorage.token);
        const config = { headers: { 'Content-Type': 'application/json' }};

        const res = await axios.get('/api/admins', config );

        dispatch({
            type: GET_ADMINS,
            payload: res.data
        });
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status));
    }
};

// Add Admin
export const addAdmin = (admin) => async dispatch => {
    try {
        setLoading();
        setAuthToken(localStorage.token);
        const config = { headers: { 'Content-Type': 'application/json' }};

        const res = await axios.post('/api/admins', admin, config);

        dispatch({
            type: ADD_ADMIN,
            payload: res.data
        });
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status));
    }
};

// delete admin
export const deleteAdmin = (id) => async dispatch => {
    try {
        if(!localStorage.token) {
            return;
        }
        
        setLoading();
        setAuthToken(localStorage.token);
        const config = { headers: { 'Content-Type': 'application/json' }};
        
        await axios.delete(`/api/admins/${id}`, config);
        
        dispatch({
            type: DELETE_ADMIN,
            payload: id
        });
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status));
    }
};

//Update admin
export const updateAdmin = (admin) => async dispatch => {
    try {
        if(!localStorage.token) {
            return;
        }

        setLoading();
        setAuthToken(localStorage.token);
        const config = { headers: { 'Content-Type': 'application/json' }};
        
        const res = await axios.put(`/api/admins/${admin._id}`, admin, config);
        
        dispatch({
            type: UPDATE_ADMIN,
            payload: res.data
        });
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status));
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
