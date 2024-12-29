import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import authReducer from "./authentication/auth.reducer";
import complaintReducer from "./complaint/complaint.reducer";
import requestReducer from "./request/request.reducer";
import eventReducer from "./events/event.reducer";
import noticeReducer from "./notice/notice.reducer";
import postReducer from "./post/post.reducer";
import billingReducer from "./billing/billing.reducer";
import contactReducer from "./contact/contact.reducer";
import parkingReducer from "./parking/parking.reducer";
import flatsReducer from "./flats/flats.reducer";

const rootReducer=combineReducers({
    auth:authReducer,
    complaint:complaintReducer,
    request:requestReducer,
    event:eventReducer,
    notice:noticeReducer,
    post:postReducer,
    contact:contactReducer,
    billing:billingReducer,
    parking:parkingReducer,
    flats:flatsReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));