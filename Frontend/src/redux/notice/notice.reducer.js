import { toast, Zoom } from "react-toastify";
import { ADD_NOTICE_FAILURE, ADD_NOTICE_REQUEST, ADD_NOTICE_SUCCESS, DELETE_NOTICE_FAILURE, DELETE_NOTICE_REQUEST, DELETE_NOTICE_SUCCESS, GET_NOTICES_FAILURE, GET_NOTICES_REQUEST, GET_NOTICES_SUCCESS, UPDATE_NOTICE_FAILURE, UPDATE_NOTICE_REQUEST, UPDATE_NOTICE_SUCCESS } from "./notice.actionType"

const initialState = {
    loading: false,
    message: null,
    error: null,
    notices:[]
}
const noticeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTICE_REQUEST:
        case UPDATE_NOTICE_REQUEST:
        case DELETE_NOTICE_REQUEST:
        case GET_NOTICES_REQUEST:
            return {
                ...state,
                loading: true,
                message: null,
                error: null
            };
        case ADD_NOTICE_SUCCESS:
        case UPDATE_NOTICE_SUCCESS:
        case DELETE_NOTICE_SUCCESS:
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
        case GET_NOTICES_SUCCESS:
            return {
                ...state,
                loading: false,
                message: null,
                error: null,
                notices: action.payload
            };
        case GET_NOTICES_FAILURE:
                    return {
                        ...state, 
                        loading: false,
                        message: null,
                        error: action.payload.error,
                    };
        case DELETE_NOTICE_SUCCESS:
        case ADD_NOTICE_FAILURE:
        case UPDATE_NOTICE_FAILURE:
        case DELETE_NOTICE_FAILURE:
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

export default noticeReducer