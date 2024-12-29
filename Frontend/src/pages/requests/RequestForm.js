import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestService } from "../../redux/request/request.action";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function RequestForm({ vendorId }) {
  const [formData, setFormData] = useState({
    address: "",
    phoneNo: "",
    description: "",
  });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.request?.loading);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    await dispatch(requestService({ data: { ...formData, vendorId } }));
    setFormData({
      address: "",
      phoneNo: "",
      description: "",
    });
  };

  return (
    <div className="relative">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="flex flex-row items-center">
        <div className="w-1/2">
          <h1 className="pb-5 font-bold text-xl">Service Request Details</h1>
          <form
            className="flex flex-col space-y-2 w-[80%]"
            onSubmit={handleSubmit}
          >
            <label htmlFor="address" className="text-sm font-semibold px-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="focus:outline-none shadow-lg h-8 border border-1 border-gray-300 p-3 rounded-lg"
              placeholder="Enter your Address here"
              required
              onChange={handleChange}
              value={formData.address}
            />
            <label htmlFor="phoneNo" className="text-sm font-semibold px-1">
              Phone no
            </label>
            <input
              type="text"
              id="phoneNo"
              name="phoneNo"
              className="focus:outline-none shadow-lg h-8 border border-1 border-gray-300 p-3 rounded-lg"
              placeholder="Enter the Phone no"
              required
              onChange={handleChange}
              value={formData.phoneNo}
            />
            <label htmlFor="description" className="text-sm font-semibold px-1">
              Additional Notes
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              className="focus:outline-none shadow-lg border border-1 border-gray-300 p-3 rounded-lg h-[100]"
              placeholder="Any specific Details"
              required
              onChange={handleChange}
              value={formData.description}
            />
            <button
              type="submit"
              className="bg-cyan-950 text-white px-2 py-1 rounded-lg w-[40%] mx-auto !mt-5"
            >
              Send Request
            </button>
          </form>
        </div>
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/WyxYbkD/Screenshot-2024-12-07-115451-removebg-preview.png"
            alt="Service Request Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default RequestForm;
