import { toast, Zoom } from "react-toastify";
import { GET_PARKING_FAILURE, GET_PARKING_REQUEST, GET_PARKING_SUCCESS } from "./parking.actionType";

const initialState = {
    loading: false,
    error: null,
    parkings:[]
}
const parkingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PARKING_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_PARKING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                parkings: action.payload
            };
        case GET_PARKING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default parkingReducer