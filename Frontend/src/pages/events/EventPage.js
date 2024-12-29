import React, { useState } from 'react';
import EventCalendar from './EventCalendar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddEventModal from './AddEventModal';
import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import EventList from './EventList';

function EventPage() {
  const [open, setOpen] = useState(false);
  const role=useSelector(store=>store.auth.user?.role)
  const isLoading=useSelector(store=>store.event?.loading);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col">
      <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
      {role==="Admin"?<><div className="m-5">
        <button
          className="bg-gradient-to-r from-cyan-950 to-cyan-600 text-white p-2 rounded-lg float-right cursor-pointer"
          onClick={handleOpen}
        >
          <AddCircleIcon />
          <span className="px-1 py-0.5">Add Event</span>
        </button>
        <AddEventModal open={open} close={handleClose} />
      </div>
      <EventCalendar />
      </>:null
      }
     <EventList/>
      
    </div>
  );
}

export default EventPage;
