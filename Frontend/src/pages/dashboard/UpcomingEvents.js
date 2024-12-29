import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Card } from '@mui/material';
import { useSelector } from 'react-redux';

function UpcomingEvents() {
  const societyId=useSelector(store=>store.auth.userDetails?.societyId)
  const allEvents=useSelector(store=>store.event?.events)
  const events=allEvents?.filter(event=>event.societyId===societyId); 
  const today = new Date(); 
  const upcomingEventsCount = events?.filter(event => {
    const eventDate = new Date(event.eventDate);
    return eventDate > today; 
  }).length;
  return (
    <Card className="flex flex-col w-[15%] p-2 space-y-2 rounded-md" sx={{ color: "gray" }}>
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-4xl">{upcomingEventsCount}</div>
        <div className="rounded-full bg-cyan-950 p-0.5 text-white"><CalendarMonthIcon /></div>
      </div>
      <div className="text-xs text-center">Total Upcoming Events</div>
    </Card>
  );
}

export default UpcomingEvents;
