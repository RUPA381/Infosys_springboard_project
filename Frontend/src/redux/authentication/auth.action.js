import axios from "axios";
import { 
    GET_ADMIN_DETAILS_FAILURE, GET_ADMIN_DETAILS_REQUEST, GET_ADMIN_DETAILS_SUCCESS, 
    GET_USER_DETAILS_FAILURE, GET_USER_DETAILS_REQUEST, GET_USER_DETAILS_SUCCESS, 
    GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, 
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, 
    REGISTER_ADMIN_FAILURE, REGISTER_ADMIN_REQUEST, REGISTER_ADMIN_SUCCESS, 
    REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_RESIDENT_FAILURE, 
    REGISTER_RESIDENT_REQUEST, REGISTER_RESIDENT_SUCCESS, REGISTER_SUCCESS 
} from "./auth.actionType";
import { getAllFlats, getAllResidents } from "../flats/flats.action";

export function loginUserAction(loginData) {
    return async function (dispatch) {
        console.log(loginData);
        dispatch({ type: LOGIN_REQUEST });
        try {
            const response = await axios.post(`http://localhost:8081/auth/login`, loginData.data);
            const data = response.data;
            if (data.token) {
                localStorage.setItem("jwt", data.token);
            }
            dispatch({ type: LOGIN_SUCCESS, payload: data });
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred during login";
            dispatch({ type: LOGIN_FAILURE, payload: errorMessage });
        }
    };
}

export function registerUserAction(loginData) {
    return async function (dispatch) {
        dispatch({ type: REGISTER_REQUEST });
        try {
            const response = await axios.post(`http://localhost:8081/auth/signup`, loginData.data);
            const data = response.data;
            if (data.token) {
                localStorage.setItem("jwt", data.token);
            }
            dispatch({ type: REGISTER_SUCCESS, payload: data });
            dispatch(getAllResidents());
            dispatch(getAllFlats());
        } catch (error) {
            console.log("Error response: ", error.response);
            const errorMessage = error.response?.data?.message || "An error occurred during SignUp";
            dispatch({ type: REGISTER_FAILURE, payload: errorMessage });
        }
    };
}

export function registerAdminDetails(registerDetails) {
    return async function (dispatch) {
        dispatch({ type: REGISTER_ADMIN_REQUEST });
        try {
            const response = await axios.post(`http://localhost:8082/api/society-register`, registerDetails.data, {
                headers: {
                    "Authorization": `Bearer ${registerDetails.data.jwt}`,
                    "Content-Type": "application/json"
                }
            });
            const data = response.data;
            dispatch({ type: REGISTER_ADMIN_SUCCESS, payload: data.message });
            dispatch(getAllFlats());
            dispatch(getAllResidents());
        } catch (error) {
            
            dispatch({ type: REGISTER_ADMIN_FAILURE, payload: error });
        }
    };
}

export function registerResidentDetails(registerDetails) {
    return async function (dispatch) {
        dispatch({ type: REGISTER_RESIDENT_REQUEST });
        try {
            const response = await axios.post(`http://localhost:8082/api/resident-register`, registerDetails.data, {
                headers: {
                    "Authorization": `Bearer ${registerDetails.data.jwt}`,
                    "Content-Type": "application/json"
                }
            });
            const data = response.data;
            dispatch({ type: REGISTER_RESIDENT_SUCCESS, payload: data.message });
            dispatch(getAllResidents());
            dispatch(getAllFlats());
            return { success: true };
        } catch (error) {
            console.log(error)
            const errorMessage = error.response?.data.message || "Registration failed";
            dispatch({ type: REGISTER_RESIDENT_FAILURE, payload: errorMessage });
            return { success: false, error: errorMessage };
        }
    };
}

export function getUserDetails(jwtToken) {
    return async function (dispatch) {
        dispatch({ type: GET_USER_DETAILS_REQUEST });
        try {
            const response = await axios.get(`http://localhost:8082/api/getResidentProfile`, {
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    "Content-Type": "application/json"
                }
            });
            const data = response.data;
            dispatch({ type: GET_USER_DETAILS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: GET_USER_DETAILS_FAILURE, payload: error });
        }
    };
}

export function getAdminDetails(jwtToken) {
    return async function (dispatch) {
        dispatch({ type: GET_ADMIN_DETAILS_REQUEST });
        try {
            const response = await axios.get(`http://localhost:8082/api/get-admin`, {
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    "Content-Type": "application/json"
                }
            });
            const data = response.data;
            dispatch({ type: GET_ADMIN_DETAILS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: GET_ADMIN_DETAILS_FAILURE, payload: error });
        }
    };
}

export function getUser(jwtToken) {
    return async function (dispatch) {
        dispatch({ type: GET_USER_REQUEST });
        try {
            const response = await axios.get(`http://localhost:8081/api/get-user`, {
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    "Content-Type": "application/json"
                }
            });
            const data = response.data;
            dispatch({ type: GET_USER_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: GET_USER_FAILURE, payload: error });
        }
    };
}

export function logout() {
    return async function (dispatch) {
        localStorage.removeItem("jwt");
        dispatch({ type: LOGOUT, payload: null });
    };
}
