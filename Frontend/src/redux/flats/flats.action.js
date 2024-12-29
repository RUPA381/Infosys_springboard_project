import axios from "axios";
import {
  ADD_FLATS_FAILURE,
  ADD_FLATS_REQUEST,
  ADD_FLATS_SUCCESS,
  GET_FLATS_FAILURE,
  GET_FLATS_REQUEST,
  GET_FLATS_SUCCESS,
  GET_RESIDENTS_FAILURE,
  GET_RESIDENTS_REQUEST,
  GET_RESIDENTS_SUCCESS,
} from "./flats.actionType";
import { getAllParking } from "../parking/parking.action";

// Helper function to get the JWT token
const getJwtToken = () => localStorage.getItem("jwt");

export function getAllFlats() {
  return async function (dispatch) {
    dispatch({ type: GET_FLATS_REQUEST });
    try {
      const jwtToken = getJwtToken();
      const response = await axios.get(`http://localhost:8082/api/getAllFlats`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      dispatch({ type: GET_FLATS_SUCCESS, payload: data });
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to get flats";
      dispatch({ type: GET_FLATS_FAILURE, payload: errorMessage });
    }
  };
}

export function getAllResidents() {
  return async function (dispatch) {
    dispatch({ type: GET_RESIDENTS_REQUEST });
    try {
      const jwtToken = getJwtToken();
      const response = await axios.get(`http://localhost:8082/api/residents`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      dispatch({ type: GET_RESIDENTS_SUCCESS, payload: data });
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to get residents";
      dispatch({ type: GET_RESIDENTS_FAILURE, payload: errorMessage });
    }
  };
}

export function addFlat(formData) {
  return async function (dispatch) {
    dispatch({ type: ADD_FLATS_REQUEST });
    try {
      const jwtToken = getJwtToken();
      await axios.post(`http://localhost:8082/api/addFlat`, formData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      });
      dispatch({ type: ADD_FLATS_SUCCESS, payload: "Flat Added" });
      dispatch(addParking(formData)); // Chaining parking logic
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to add flat";
      dispatch({ type: ADD_FLATS_FAILURE, payload: errorMessage });
    }
  };
}

export function addParking(formData) {
  return async function (dispatch) {
    try {
      const jwtToken = getJwtToken();
      await axios.post(`http://localhost:8084/api/addParking`, formData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(getAllFlats());
      dispatch(getAllParking());
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to add parking";
      console.error(errorMessage);
    }
  };
}
