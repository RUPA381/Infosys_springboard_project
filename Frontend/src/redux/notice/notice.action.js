import axios from "axios";
import { ADD_NOTICE_FAILURE, ADD_NOTICE_REQUEST, ADD_NOTICE_SUCCESS, DELETE_NOTICE_FAILURE, DELETE_NOTICE_REQUEST, DELETE_NOTICE_SUCCESS, GET_NOTICES_FAILURE, GET_NOTICES_REQUEST, GET_NOTICES_SUCCESS, UPDATE_NOTICE_FAILURE, UPDATE_NOTICE_REQUEST, UPDATE_NOTICE_SUCCESS } from "./notice.actionType";


export function addNotice(formData){
    return async function(dispatch){
        dispatch({type:ADD_NOTICE_REQUEST})
        try{
            const jwtToken=localStorage.getItem("jwt");
            const response=await axios.post("http://localhost:8084/api/addNotice",formData,{
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    "Content-Type": "application/json"
                  }
            });
            const data=response.data;
            dispatch({ type: ADD_NOTICE_SUCCESS, payload: data.message });
        dispatch(getAllNotices());

        }
        catch(error){
            const errorMessage = error.response?.data?.message ||"Unable to Add"
            dispatch({ type: ADD_NOTICE_FAILURE, payload: errorMessage });
        }
    }
}

export function updateNotice(noticeId, formData) {
    return async function(dispatch) {
      dispatch({ type: UPDATE_NOTICE_REQUEST });
  
      try {
        const jwtToken = localStorage.getItem("jwt");
        const response = await axios.put(
          `http://localhost:8084/api/updateNotice/${noticeId}`, formData,
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        );
  
        const data = response.data;
        dispatch({ type: UPDATE_NOTICE_SUCCESS, payload: data.message });
        dispatch(getAllNotices());
      } catch (error) {
        const errorMessage = error.response?.data?.message || "Unable to Update";
        dispatch({ type: UPDATE_NOTICE_FAILURE, payload: errorMessage });
      }
    };
  }

 export  function deleteNotice(noticeId){
    return async function(dispatch){
      dispatch({type:DELETE_NOTICE_REQUEST})
      try{
        const jwtToken=localStorage.getItem("jwt");
        const response=await axios.delete(`http://localhost:8084/api/deleteNotice/${noticeId}`,
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        )
        const data=response.data;
        dispatch({ type: DELETE_NOTICE_SUCCESS, payload: data.message });
        dispatch(getAllNotices());
      }
      catch(error){
        dispatch({type: DELETE_NOTICE_FAILURE, payload: error.message})
      }
    }
  }
  export function getAllNotices(){
    return async function(dispatch){
      dispatch({type:GET_NOTICES_REQUEST})
      try{
        const jwtToken=localStorage.getItem("jwt");
          const response=await axios.get(`http://localhost:8084/api/getAllNotices`,
            {
              headers: {
                  "Authorization": `Bearer ${jwtToken}`,
                  "Content-Type": "application/json"
                }
          }
          )
          const data=response.data;
          dispatch({ type: GET_NOTICES_SUCCESS, payload: data})
      }
      catch(error){
        dispatch({type:GET_NOTICES_FAILURE, payload: "Failed to get Notices"})
      }
    }
  }