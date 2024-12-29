import axios from "axios";
import { ADD_CONTACT_FAILURE, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, DELETE_CONTACT_FAILURE, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS, UPDATE_CONTACT_FAILURE, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_SUCCESS } from "./contact.actionType";


export function addContact(formData){
    return async function(dispatch){
        dispatch({type:ADD_CONTACT_REQUEST})
        try{
            const jwtToken=localStorage.getItem("jwt");
            const response=await axios.post("http://localhost:8084/api/addContact",formData,{
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    "Content-Type": "application/json"
                  }
            });
            const data=response.data;
            dispatch({ type: ADD_CONTACT_SUCCESS, payload: data.message });
            dispatch(getAllContacts());
        }
        catch(error){
            const errorMessage = error.response?.data?.message ||"Unable to Add"
            dispatch({ type: ADD_CONTACT_FAILURE, payload: errorMessage });
        }
    }
}

export function updateContact(emergencyId, formData) {
    return async function(dispatch) {
      dispatch({ type: UPDATE_CONTACT_REQUEST });
  
      try {
        const jwtToken = localStorage.getItem("jwt");
        const response = await axios.put(
          `http://localhost:8084/api/updateContact/${emergencyId}`, formData,
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        );
        const data = response.data;
        dispatch({ type: UPDATE_CONTACT_SUCCESS, payload: data.message });
        dispatch(getAllContacts());
      } catch (error) {
        const errorMessage = error.response?.data?.message || "Unable to Update";
        dispatch({ type: UPDATE_CONTACT_FAILURE, payload: errorMessage });
      }
    };
  }

export  function deleteContact(emergencyId){
    return async function(dispatch){
      dispatch({type:DELETE_CONTACT_REQUEST})
      try{
        const jwtToken=localStorage.getItem("jwt");
        const response=await axios.delete(`http://localhost:8084/api/deleteContact/${emergencyId}`,
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        )
        const data=response.data;
        dispatch({ type: DELETE_CONTACT_SUCCESS, payload: data.message });
        dispatch(getAllContacts());
      }
      catch(error){
        dispatch({type: DELETE_CONTACT_FAILURE, payload: error.message})
      }
    }
  }
export function getAllContacts(){
    return async function(dispatch){
      dispatch({type:GET_CONTACTS_REQUEST})
      try{
        const jwtToken=localStorage.getItem("jwt");
          const response=await axios.get(`http://localhost:8084/api/getAllContacts`,
            {
              headers: {
                  "Authorization": `Bearer ${jwtToken}`,
                  "Content-Type": "application/json"
                }
          }
          )
          const data=response.data;
          dispatch({ type: GET_CONTACTS_SUCCESS, payload: data})
      }
      catch(error){
        dispatch({type:GET_CONTACTS_FAILURE, payload: "Failed To Get Contacts"})
      }
    }
  }