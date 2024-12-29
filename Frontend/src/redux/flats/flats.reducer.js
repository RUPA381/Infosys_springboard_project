import { toast, Zoom } from "react-toastify";
import { ADD_FLATS_FAILURE, ADD_FLATS_SUCCESS, GET_FLATS_FAILURE, GET_FLATS_REQUEST, GET_FLATS_SUCCESS, GET_RESIDENTS_FAILURE, GET_RESIDENTS_REQUEST, GET_RESIDENTS_SUCCESS } from "./flats.actionType";

const initialState = {
    loading: false,
    error: null,
    flats:[],
    residents: [],
    message:null
}
const flatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FLATS_REQUEST:
        case GET_RESIDENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_FLATS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                flats: action.payload
            };
        case GET_RESIDENTS_SUCCESS:
            return{
                ...state,
                loading:false,
                error: null,
                residents: action.payload
            }
            case ADD_FLATS_SUCCESS:
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
        case GET_FLATS_FAILURE:
        case GET_RESIDENTS_FAILURE:
        case ADD_FLATS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                message:null
            };
        default:
            return state;
    }
};

export default flatsReducer