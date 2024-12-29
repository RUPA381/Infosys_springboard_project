import axios from "axios";
import { REGISTER_COMPLAINT_FAILURE, REGISTER_COMPLAINT_REQUEST, REGISTER_COMPLAINT_SUCCESS,CLOSE_COMPLAINT_FAILURE,CLOSE_COMPLAINT_REQUEST,CLOSE_COMPLAINT_SUCCESS, GET_COMPLAINTS_REQUEST, GET_COMPLAINTS_SUCCESS, GET_COMPLAINTS_FAILURE } from "./complaint.actionType"

export function registerComplaint(complaintData){
    return async function(dispatch){
        dispatch({type:REGISTER_COMPLAINT_REQUEST})
        try{
            const jwtToken = localStorage.getItem("jwt");
            const response = await axios.post(`http://localhost:8083/api/addComplaint`, complaintData.data,{
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    "Content-Type": "application/json"
                  }
            });
            const data = response.data;
            dispatch({ type: REGISTER_COMPLAINT_SUCCESS, payload: "Complaint Registered Sucessfully" });
            dispatch(getAllComplaints());
        }
        catch(error){
            const errorMessage = error.response?.data?.message || "unable to register complaint";
            dispatch({ type: REGISTER_COMPLAINT_FAILURE, payload: errorMessage });
        }
    }
}
export function closeComplaint(complaintId){
    return async function(dispatch){
        dispatch({type:CLOSE_COMPLAINT_REQUEST})
        try{
            const jwtToken = localStorage.getItem("jwt");
            const response = await axios.put(`http://localhost:8083/api/closeComplaint/${complaintId}`,{},
                {
                    headers: {
                        "Authorization": `Bearer ${jwtToken}`,
                        "Content-Type": "application/json"
                      }
                }
            );
            dispatch({ type: CLOSE_COMPLAINT_SUCCESS, payload: "Complaint Closed Successfully" });
            dispatch(getAllComplaints());
        }
        catch(error){
            const errorMessage = error.response?.data?.message || "Unable To Close Complaint";
            dispatch({ type: CLOSE_COMPLAINT_FAILURE, payload: errorMessage });
        }
    }

}

export function getAllComplaints(){
    return async function(dispatch){
      dispatch({type:GET_COMPLAINTS_REQUEST})
      try{
        const jwtToken=localStorage.getItem("jwt");
          const response=await axios.get(`http://localhost:8083/api/getAllComplaints`,
            {
              headers: {
                  "Authorization": `Bearer ${jwtToken}`,
                  "Content-Type": "application/json"
                }
          }
          )
          const data=response.data;
          dispatch({ type: GET_COMPLAINTS_SUCCESS, payload: data})
      }
      catch(error){
        dispatch({type:GET_COMPLAINTS_FAILURE, payload: error.message})
      }
    }
  }
