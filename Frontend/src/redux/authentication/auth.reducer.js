import { 
    GET_ADMIN_DETAILS_FAILURE, GET_ADMIN_DETAILS_REQUEST, GET_ADMIN_DETAILS_SUCCESS, 
    GET_USER_DETAILS_FAILURE, GET_USER_DETAILS_REQUEST, GET_USER_DETAILS_SUCCESS, 
    GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, 
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, 
    LOGOUT, REGISTER_ADMIN_FAILURE, REGISTER_ADMIN_REQUEST, REGISTER_ADMIN_SUCCESS, 
    REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_RESIDENT_FAILURE, REGISTER_RESIDENT_REQUEST, 
    REGISTER_RESIDENT_SUCCESS, REGISTER_SUCCESS 
} from "./auth.actionType";
import { toast, Zoom } from 'react-toastify';
const initialState = {
    jwt: null,
    message: null,
    isLogged: false,
    error: null,
    userDetails: null,
    loading: false,
    user: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case REGISTER_ADMIN_REQUEST:
        case REGISTER_RESIDENT_REQUEST:
        case GET_USER_DETAILS_REQUEST:
        case GET_ADMIN_DETAILS_REQUEST:
        case GET_USER_REQUEST:
            return { 
                ...state, 
                loading: true, 
                error: null, 
                message: null 
            };

        case LOGIN_SUCCESS:
            toast.success(action.payload.message, {
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
                jwt: action.payload.token, 
                isLogged: true,
                message: action.payload.message,
                loading: false,
                error: null,
            };

        case REGISTER_SUCCESS:
            toast.success("Registration Successful", {
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
                jwt: action.payload.token, 
                isLogged: true,
                message: "Registration Successful", 
                loading: false,
                error: null,
            };

        case REGISTER_ADMIN_SUCCESS:
        case REGISTER_RESIDENT_SUCCESS:
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
                message: action.payload, 
                isLogged: true,
                loading: false,
                error: null,
            };

        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload, 
                error: null,
            };

        case GET_USER_DETAILS_SUCCESS:
        case GET_ADMIN_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                userDetails: action.payload, 
                error: null
            };

        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case REGISTER_ADMIN_FAILURE:
        case REGISTER_RESIDENT_FAILURE:
        case GET_USER_DETAILS_FAILURE:
        case GET_ADMIN_DETAILS_FAILURE:
        case GET_USER_FAILURE:
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
                message: null,
                isLogged: false,
            };
        case LOGOUT:
            return { 
                ...initialState 
            };

        default:
            return state;
    }
};

export default authReducer;
