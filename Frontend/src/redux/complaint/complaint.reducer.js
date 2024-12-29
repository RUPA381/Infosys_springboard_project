import { toast, Zoom } from "react-toastify";
import { 
    CLOSE_COMPLAINT_FAILURE, 
    CLOSE_COMPLAINT_REQUEST, 
    CLOSE_COMPLAINT_SUCCESS, 
    GET_COMPLAINTS_FAILURE, 
    GET_COMPLAINTS_REQUEST, 
    GET_COMPLAINTS_SUCCESS, 
    REGISTER_COMPLAINT_FAILURE, 
    REGISTER_COMPLAINT_REQUEST, 
    REGISTER_COMPLAINT_SUCCESS 
} from "./complaint.actionType";

const initialState = {
    message: null,
    error: null,
    loading: false,
    complaints:[]
};

const complaintReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_COMPLAINT_REQUEST:
        case CLOSE_COMPLAINT_REQUEST:
        case GET_COMPLAINTS_REQUEST:
            return {
                ...state,
                loading: true,
                message: null,
                error: null,
            };
        case REGISTER_COMPLAINT_SUCCESS:
        case CLOSE_COMPLAINT_SUCCESS:
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
                error: null,
            };
        case GET_COMPLAINTS_SUCCESS:
            return {
                ...state,
                loading: false,
                message: null,
                error: null,
                complaints: action.payload,
            }
            case GET_COMPLAINTS_FAILURE:
            return {
                loading: false,
                message: null,
                error: action.payload.error,
            };
        case REGISTER_COMPLAINT_FAILURE:
        case CLOSE_COMPLAINT_FAILURE:
            toast.error(action.payload.error, {
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
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default complaintReducer;
