import { toast, Zoom } from "react-toastify";
import { GET_BILLINGS_FAILURE, GET_BILLINGS_REQUEST, GET_BILLINGS_SUCCESS, GET_PAYMENT_FAILURE, GET_PAYMENT_REQUEST, GET_PAYMENT_SUCCESS } from "./billing.actionType";


const initialState = {
    message: null,
    error: null,
    loading: false,
    billings:[]
};

const billingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PAYMENT_REQUEST:
        case GET_BILLINGS_REQUEST:
            return {
                ...state,
                loading: true,
                message: null,
                error: null,
            };
        case GET_PAYMENT_SUCCESS:
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
                loading: false,
                message: action.payload,
                error: null,
            };
        case GET_BILLINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                message: null,
                error: null,
                billings: action.payload,
            };
        case GET_BILLINGS_FAILURE:
            return {
                loading: false,
                message: null,
                error: action.payload.error,
            };
        case GET_PAYMENT_FAILURE:
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
                loading: false,
                message: null,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default billingReducer;
