import axios from "axios";
import { ADD_VENDOR_FAILURE, ADD_VENDOR_REQUEST, ADD_VENDOR_SUCCESS, 
    DELETE_VENDOR_FAILURE, DELETE_VENDOR_REQUEST, DELETE_VENDOR_SUCCESS, 
    GET_VENDORS_FAILURE, 
    GET_VENDORS_REQUEST, 
    GET_VENDORS_SUCCESS, 
    REQUEST_SERVICE_FAILURE, REQUEST_SERVICE_REQUEST, REQUEST_SERVICE_SUCCESS, 
    UPDATE_VENDOR_FAILURE, UPDATE_VENDOR_REQUEST, UPDATE_VENDOR_SUCCESS } from "./request.actionType"

export function addVendor(vendorData){
    return async function(dispatch){
        dispatch({type:ADD_VENDOR_REQUEST})
        try{
            const jwtToken = localStorage.getItem("jwt");
            const response = await axios.post(`http://localhost:8083/api/addVendor`, vendorData.data,{
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    "Content-Type": "application/json"
                  }
            });
            dispatch({ type: ADD_VENDOR_SUCCESS, payload: "Added Vendor Successfully" });
            dispatch(getAllVendors());
        }
        catch(error){
            dispatch({ type: ADD_VENDOR_FAILURE, payload: "Unable To Add Vendor" });
        }
    }
}

export function requestService(requestData){
    return async function(dispatch){
        dispatch({type:REQUEST_SERVICE_REQUEST})
        console.log("requestService",requestData.data)
        if (requestData.data.vendorId==null) {
            const errorMessage = "Select A Valid Vendor...";
            dispatch({ type: REQUEST_SERVICE_FAILURE, payload: errorMessage });
            return;
        }
        try{
            const jwtToken = localStorage.getItem("jwt");
            const response = await axios.post(`http://localhost:8083/api/sendRequest`, requestData.data,
                {
                    headers: {
                        "Authorization": `Bearer ${jwtToken}`,
                        "Content-Type": "application/json"
                      }
                }
            );
            dispatch({ type: REQUEST_SERVICE_SUCCESS, payload: "Request Sent Successfully" });
            dispatch(getAllVendors());
        }
        catch(error){
            dispatch({ type: REQUEST_SERVICE_FAILURE, payload: "Unable To Send Request"});
        }
    }
}

export function updateVendor(vendorId, formData) {
    return async function(dispatch) {
      dispatch({ type: UPDATE_VENDOR_REQUEST });
  
      try {
        const jwtToken = localStorage.getItem("jwt");
        const response = await axios.put(
          `http://localhost:8083/api/updateVendor/${vendorId}`, formData,
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        );
        const data = response.data;
        dispatch({ type: UPDATE_VENDOR_SUCCESS, payload: data.message });
        dispatch(getAllVendors());
      } catch (error) {
        const errorMessage = error.response?.data?.message || "Unable to Update";
        dispatch({ type: UPDATE_VENDOR_FAILURE, payload: errorMessage });
      }
    };
  }

export function deleteVendor(vendorId){
    return async function(dispatch){
      dispatch({type:DELETE_VENDOR_REQUEST})
      try{
        const jwtToken=localStorage.getItem("jwt");
        const response=await axios.delete(`http://localhost:8083/api/deleteVendor/${vendorId}`,
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        )
        const data=response.data;
        dispatch({ type: DELETE_VENDOR_SUCCESS, payload: "Vendor Deleted Successfully" });
        dispatch(getAllVendors());
      }
      catch(error){
        dispatch({type: DELETE_VENDOR_FAILURE, payload: error.message})
        
      }
    }
  }

export function getAllVendors(){
  return async function(dispatch){
    dispatch({type:GET_VENDORS_REQUEST})
    try{
      const jwtToken=localStorage.getItem("jwt");
        const response=await axios.get(`http://localhost:8083/api/getAllVendors`,
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        )
        const data=response.data;
        dispatch({ type: GET_VENDORS_SUCCESS, payload: data})
    }
    catch(error){
      dispatch({type:GET_VENDORS_FAILURE, payload: error.message})
    }
  }
}