import { toast, Zoom } from "react-toastify";
import { 
    ADD_VENDOR_FAILURE, 
    ADD_VENDOR_REQUEST, 
    ADD_VENDOR_SUCCESS, 
    DELETE_VENDOR_FAILURE, 
    DELETE_VENDOR_REQUEST, 
    DELETE_VENDOR_SUCCESS, 
    GET_VENDORS_FAILURE, 
    GET_VENDORS_REQUEST, 
    GET_VENDORS_SUCCESS, 
    REQUEST_SERVICE_FAILURE, 
    REQUEST_SERVICE_REQUEST, 
    REQUEST_SERVICE_SUCCESS, 
    UPDATE_VENDOR_FAILURE, 
    UPDATE_VENDOR_REQUEST,
    UPDATE_VENDOR_SUCCESS
} from "./request.actionType";

const initialState = {
    message: null,
    error: null,
    loading: false,
    vendors:[]
};

const requestReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VENDOR_REQUEST:
        case REQUEST_SERVICE_REQUEST:
        case UPDATE_VENDOR_REQUEST:
        case DELETE_VENDOR_REQUEST:
        case GET_VENDORS_REQUEST:
            return {
                ...state,
                loading: true,
                message: null,
                error: null
            };

        case REQUEST_SERVICE_SUCCESS:
        case ADD_VENDOR_SUCCESS:
        case UPDATE_VENDOR_SUCCESS:
        case DELETE_VENDOR_SUCCESS:
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
        case GET_VENDORS_SUCCESS:
            return {
                ...state,
                loading:false,
                vendors:action.payload
            }
        case GET_VENDORS_FAILURE:
                    return {
                        ...state, 
                        loading: false,
                        message: null,
                        error: action.payload.error,
                    };
        case REQUEST_SERVICE_FAILURE:
        case ADD_VENDOR_FAILURE:
        case UPDATE_VENDOR_FAILURE:
        case DELETE_VENDOR_FAILURE:
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
                error: action.payload,
                message: null
            };
        default:
            return state;
    }
};
export default requestReducer;
