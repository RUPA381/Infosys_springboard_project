import axios from "axios";
import { GET_PARKING_FAILURE, GET_PARKING_REQUEST, GET_PARKING_SUCCESS } from "./parking.actionType";

export function getAllParking(){
    return async function(dispatch){
      dispatch({type:GET_PARKING_REQUEST})
      try{
        const jwtToken=localStorage.getItem("jwt");
          const response=await axios.get(`http://localhost:8084/api/getAllParking`,
            {
              headers: {
                  "Authorization": `Bearer ${jwtToken}`,
                  "Content-Type": "application/json"
                }
          }
          )
          const data=response.data;
          dispatch({ type: GET_PARKING_SUCCESS, payload: data})
      }
      catch(error){
        dispatch({type:GET_PARKING_FAILURE, payload: "Failed To Get Parking"})
      }
    }
  }