import { toast, Zoom } from "react-toastify";
import { ADD_EVENT_FAILURE, ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, ADD_FEEDBACK_FAILURE, ADD_FEEDBACK_REQUEST, ADD_FEEDBACK_SUCCESS, DELETE_EVENT_FAILURE, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, GET_EVENTS_FAILURE, GET_EVENTS_REQUEST, GET_EVENTS_SUCCESS, UPDATE_EVENT_FAILURE, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS } from "./event.actionType"

const initialState={
    loading:false,
    message:null,
    error:null,
    events:[]
}
const eventReducer=(state = initialState, action)=>{
    switch(action.type){
        case ADD_EVENT_REQUEST:
        case UPDATE_EVENT_REQUEST:
        case DELETE_EVENT_REQUEST:
        case ADD_FEEDBACK_REQUEST:
        case GET_EVENTS_REQUEST:
            return{
                ...state,
                loading:true,
                message:null,
                error:null
            }
            case ADD_EVENT_SUCCESS:
            case UPDATE_EVENT_SUCCESS:
            case DELETE_EVENT_SUCCESS:
            case ADD_FEEDBACK_SUCCESS:
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
                return{
                    ...state,
                    loading:false,
                    message:action.payload,
                    error:null
                }
                case GET_EVENTS_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        message:null,
                        error:null,
                        events:action.payload
                    }
                case GET_EVENTS_FAILURE:
                            return {
                                loading: false,
                                message: null,
                                error: action.payload.error,
                            };
                case ADD_EVENT_FAILURE:
                case UPDATE_EVENT_FAILURE:
                case DELETE_EVENT_FAILURE:
                case ADD_FEEDBACK_FAILURE:
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
                    return{
                        ...state,
                        loading:false,
                        message:null,
                        error:action.payload
                    }
        default:
            return state
    }

}
export default eventReducer