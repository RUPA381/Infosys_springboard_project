import axios from "axios";
import { api, API_BASE_URL } from "../../config/api";

function loginUserAction(loginData) {
    return async function (dispatch) {
        dispatch({ type: "LOGIN_REQUEST"});
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/login`, loginData.data);
            const data = response.data;
            if (data.token) {
                localStorage.setItem("jwt", data.token);
            }
            dispatch({ type: "LOGIN_SUCCESS", payload: data });
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred during login";
            dispatch({ type: "LOGIN_FAILURE", payload: errorMessage });
        }
    };
}

function registerUserAction(loginData) {
    return async function (dispatch) {
        dispatch({ type: "REGISTER_REQUEST" });
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/signup`, loginData.data);
            const data = response.data;
            console.log(data.token);
            if (data.token) {
                localStorage.setItem("jwt", data.token);
            }
            dispatch({ type: "REGISTER_SUCCESS", payload: data });
        } catch (error) {
          console.log("Error response: ", error.response);
          const errorMessage = error.response?.data?.message || "An error occurred during SignUp";
            dispatch({ type: "REGISTER_FAILURE", payload: errorMessage });
        }
    };
}

function registerAdminDetails(registerDetails) {
    return async function (dispatch) {
      dispatch({ type: "REGISTER_ADMIN_REQUEST"});
      try {
        const response = await api.post(`${API_BASE_URL}/api/admin-register`,registerDetails.data,{
          headers:{
            "Authorization":`Bearer ${registerDetails.data.jwt}`,
          }
        });
        const data = response.data;
        dispatch({ type: "REGISTER_ADMIN_SUCCESS", payload: data.message });
      } catch (error) {
        dispatch({ type: "REGISTER_ADMIN_FAILURE", payload: error });
      }
    };
  }
  
  function registerResidentDetails(registerDetails) {
    return async function (dispatch) {
      dispatch({ type: "REGISTER_RESIDENT_REQUEST" });
      console.log("Register Details (Admin):", registerDetails);
      try {
        const response = await api.post(`${API_BASE_URL}/api/resident-register`,registerDetails.data,{
          headers:{
            "Authorization":`Bearer ${registerDetails.data.jwt}`,
            "Content-Type": "application/json"
          }
        });
        const data = response.data;
        dispatch({ type: "REGISTER_RESIDENT_SUCCESS", payload: data.message });
      } catch (error) {
        dispatch({ type: "REGISTER_RESIDENT_FAILURE", payload: error });
      }
    };
  }
export { loginUserAction, registerUserAction, registerAdminDetails, registerResidentDetails };