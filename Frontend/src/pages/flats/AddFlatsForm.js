import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFlat } from '../../redux/flats/flats.action';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
function AddFlatsForm() {
  const [formData, setFormData] = useState({
    flatNo: '',
    parkingNo:""
  });
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFlat(formData))
    setFormData({
      flatNo: '',
      parkingNo:""
    });
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        <img
          src="https://i.ibb.co/XyFt845/Form-Image.png"
          alt="Form-Image"
          className="h-screen w-full"
        />
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <form
          className="flex flex-col w-3/4 items-center space-y-5"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-gray-700">Add Flat and Parking Details</h2>
          <div className='flex flex-row items-center justify-center space-x-5'>
          <input
            type="text"
            name="flatNo"
            onChange={handleChange}
            value={formData.flatNo}
            placeholder="Flat No"
            className="h-10 w-full bg-gray-200 border border-gray-400 rounded-md pl-3 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            required
          />
          <input
            type="text"
            name="parkingNo"
            onChange={handleChange}
            value={formData.parkingNo}
            placeholder="Parking No"
            className="h-10 w-full bg-gray-200 border border-gray-400 rounded-md pl-3 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            required
          />
          <div onClick={handleSubmit} className='text-cyan-950'><AddCircleIcon style={{ fontSize: '35px', cursor: 'pointer' }}/></div>
          </div>
          <button
            className="bg-cyan-950 px-6 py-2 rounded-md text-white hover:bg-cyan-700 transition duration-200"
          onClick={()=>navigate("/community")}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFlatsForm;
