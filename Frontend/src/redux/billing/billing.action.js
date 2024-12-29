import axios from "axios";
import { GET_BILLINGS_FAILURE, GET_BILLINGS_REQUEST, GET_BILLINGS_SUCCESS, GET_PAYMENT_FAILURE, GET_PAYMENT_REQUEST, GET_PAYMENT_SUCCESS } from "./billing.actionType";

export function makePayment() {
  return async function (dispatch) {
    dispatch({ type: GET_PAYMENT_REQUEST });
    try {
      const jwtToken = localStorage.getItem("jwt");
      const response = await axios.post(
        "http://localhost:8085/api/createPayment",
        {},
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.data;
      var options = {
        key: "rzp_test_Ypm4MexzscRQpH",
        amount: data.amount,
        currency: "INR",
        name: "USHA SRI PONAKA",
        description: "Monthly Maintenance Payment",
        order_id: data.razorpayId,
        prefill: {
          name: "Usha Sri",
          email: "usha@gmail.com",
        },
        theme: {
          color: "#339900",
        },
        handler: async function (response) {
          console.log("Payment response:", response);
          try {
            const callbackResponse = await axios.post(
              "http://localhost:8085/api/paymentCallback",
              response,
              {
                headers: {
                  Authorization: `Bearer ${jwtToken}`,
                  "Content-Type": "application/json",
                },
              }
            );
            dispatch({ type: GET_PAYMENT_SUCCESS, payload: callbackResponse.data});
          } catch (error) {
            console.error("Callback error:", error);
            dispatch({ type: GET_PAYMENT_FAILURE, payload: error.message });
          }
        },
      };
      var razorpay = new Razorpay(options);
      razorpay.open();
      dispatch({ type: GET_PAYMENT_SUCCESS, payload: data.status });
      dispatch(getAllBillings());
    } catch (error) {
      dispatch({ type: GET_PAYMENT_FAILURE, payload: error.message });
    }
  };
}

export function getAllBillings(){
  return async function(dispatch){
    dispatch({type:GET_BILLINGS_REQUEST})
    try{
      const jwtToken=localStorage.getItem("jwt");
        const response=await axios.get("http://localhost:8085/api/getAllPayments",
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        )
        const data=response.data;
        dispatch({ type: GET_BILLINGS_SUCCESS, payload: data})
    }
    catch(error){
      dispatch({type:GET_BILLINGS_FAILURE, payload: error.message})
    }
  }
}