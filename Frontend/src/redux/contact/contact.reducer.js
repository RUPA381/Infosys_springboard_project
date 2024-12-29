import { ADD_CONTACT_FAILURE, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, 
    DELETE_CONTACT_FAILURE, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, 
    GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS, 
    UPDATE_CONTACT_FAILURE, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_SUCCESS } from "./contact.actionType";
import { toast, Zoom } from "react-toastify";

const initialState = {
    loading: false,
    message: null,
    error: null,
    contacts:[]
}
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT_REQUEST:
        case UPDATE_CONTACT_REQUEST:
        case DELETE_CONTACT_REQUEST:
        case GET_CONTACTS_REQUEST:
            return {
                ...state,
                loading: true,
                message: null,
                error: null
            };
        case ADD_CONTACT_SUCCESS:
        case UPDATE_CONTACT_SUCCESS:
        case DELETE_CONTACT_SUCCESS:
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
        case GET_CONTACTS_SUCCESS:
            return {
               ...state,
                loading: false,
                message: null,
                error: null,
                contacts: action.payload
            };
            case GET_CONTACTS_FAILURE:
                        return {
                            loading: false,
                            message: null,
                            error: action.payload.error,
                        };
        case ADD_CONTACT_FAILURE:
        case UPDATE_CONTACT_FAILURE:
        case DELETE_CONTACT_FAILURE:
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

export default contactReducer