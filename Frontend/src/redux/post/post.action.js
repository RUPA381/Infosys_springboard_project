import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, DELETE_POST_FAILURE, 
  DELETE_POST_REQUEST, DELETE_POST_SUCCESS, GET_POSTS_FAILURE, GET_POSTS_REQUEST, 
  GET_POSTS_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, 
  UPDATE_POST_FAILURE, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS } from "./post.actionType";
import axios from "axios";
export function addPost(formData){
    return async function(dispatch){
        dispatch({type:ADD_POST_REQUEST})
        try{
            const jwtToken=localStorage.getItem("jwt");
            const response=await axios.post("http://localhost:8084/api/addPost",formData,{
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    "Content-Type": "application/json"
                  }
            });
            const data=response.data;
            dispatch({ type: ADD_POST_SUCCESS, payload: data.message });
            dispatch(getAllPosts())
        }
        catch(error){
            const errorMessage = error.response?.data?.message ||"Unable to Add"
            dispatch({ type: ADD_POST_FAILURE, payload: errorMessage });
        }
    }
}

export function updatePost(PostId, formData) {
    return async function(dispatch) {
      dispatch({ type: UPDATE_POST_REQUEST });
  
      try {
        const jwtToken = localStorage.getItem("jwt");
        const response = await axios.put(
          `http://localhost:8084/api/updatePost/${PostId}`, formData,
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        );
        const data = response.data;
        dispatch({ type: UPDATE_POST_SUCCESS, payload: data.message });
        dispatch(getAllPosts())
      } catch (error) {
        const errorMessage = error.response?.data?.message || "Unable to Update";
        dispatch({ type: UPDATE_POST_FAILURE, payload: errorMessage });
      }
    };
  }

  export function deletePost(PostId){
    return async function(dispatch){
      dispatch({type:DELETE_POST_REQUEST})
      try{
        const jwtToken=localStorage.getItem("jwt");
        const response=await axios.delete(`http://localhost:8084/api/deletePost/${PostId}`,
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        )
        const data=response.data;
        dispatch({ type: DELETE_POST_SUCCESS, payload: data.message });
        dispatch(getAllPosts())
      }
      catch(error){
        dispatch({type: DELETE_POST_FAILURE, payload: error.message})
      }
    }
  }
 export  function likePost(postId){
    return async function(dispatch){
        dispatch({type:LIKE_POST_REQUEST})
        try{
          const jwtToken=localStorage.getItem("jwt");
          const response=await axios.put(`http://localhost:8084/api/likePost/${postId}`,
            {
              headers: {
                  "Authorization": `Bearer ${jwtToken}`,
                  "Content-Type": "application/json"
                }
            }
          )
          const data=response.data;
          dispatch({ type: LIKE_POST_SUCCESS, payload: data.message });
          dispatch(getAllPosts())
        }
        catch(error){
          dispatch({type: LIKE_POST_FAILURE, payload: error.message})
        }
    }
  }
  
  export function getAllPosts(){
    return async function(dispatch){
      dispatch({type:GET_POSTS_REQUEST})
      try{
        const jwtToken=localStorage.getItem("jwt");
          const response=await axios.get(`http://localhost:8084/api/getAllPosts`,
            {
              headers: {
                  "Authorization": `Bearer ${jwtToken}`,
                  "Content-Type": "application/json"
                }
          }
          )
          const data=response.data;
          dispatch({ type: GET_POSTS_SUCCESS, payload: data})
      }
      catch(error){
        dispatch({type:GET_POSTS_FAILURE, payload: error.message})
      }
    }
  }