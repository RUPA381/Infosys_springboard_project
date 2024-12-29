import { toast, Zoom } from "react-toastify";
import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, DELETE_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, UPDATE_POST_FAILURE, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS } from "./post.actionType"

const initialState = {
    loading: false,
    message: null,
    error: null,
    posts:[]
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
        case UPDATE_POST_REQUEST:
        case DELETE_POST_REQUEST:
        case GET_POSTS_REQUEST:
        case LIKE_POST_REQUEST:
            return {
                ...state,
                loading: true,
                message: null,
                error: null
            };
        case ADD_POST_SUCCESS:
        case UPDATE_POST_SUCCESS:
        case DELETE_POST_SUCCESS:
            toast.success(action.payload, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
            return {
                ...state,
                loading: false,
                message: action.payload,
                error: null
            };
        case LIKE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                message: null,
                error: null
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                message: null,
                error: null,
                posts: action.payload
            };
        case GET_POSTS_FAILURE:
                    return {
                        ...state, 
                        loading: false,
                        message: null,
                        error: action.payload.error,
                    };
        case DELETE_POST_FAILURE:
        case ADD_POST_FAILURE:
        case UPDATE_POST_FAILURE:
        case DELETE_POST_FAILURE:
        case LIKE_POST_FAILURE:
            toast.error(action.payload, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
            return {
                ...state,
                loading: false,
                message: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default postReducer