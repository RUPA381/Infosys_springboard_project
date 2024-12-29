import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { useParams } from 'react-router-dom';
import FeedBackModal from './FeedBackModal';
import { useSelector } from 'react-redux';

function EventFeedback() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const message = useSelector(store => store.event?.message);
  const role = useSelector(store => store.auth.user?.role);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    async function fetchEventById() {
      try {
        const jwtToken = localStorage.getItem('jwt');
        const response = await fetch(`http://localhost:8084/api/getEventById/${eventId}`,
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        );
        if (!response.ok) throw new Error('Failed to fetch event details');
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    }
    fetchEventById();
  }, [eventId]);

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const jwtToken = localStorage.getItem('jwt');
        const response = await fetch(`http://localhost:8084/api/getFeedback/${eventId}`,
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        );
        if (!response.ok) throw new Error('Failed to fetch feedbacks');
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    }
    fetchFeedback();
  }, [eventId, message]);

  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <div className="flex flex-row m-5">
        <div className="flex flex-col w-3/4">
          {/* Event details */}
          <div className="flex bg-white drop-shadow-lg p-3 text-cyan-950" key={event?.eventId}>
            <div className="flex flex-row space-x-5 w-3/4">
              <div>
                <img src={event?.eventImage} alt="Event" className="w-[7rem] h-[7rem]" />
              </div>
              <div className="flex flex-col space-y-3 justify-center">
                <h1 className="font-bold text-md">{event?.eventName}</h1>
                <p className="text-sm">{event?.eventDetails}</p>
              </div>
            </div>
            <div className="w-1/4 flex flex-col items-end justify-between">
              {event?.eventDate && (
                <div className="text-xs">
                  <p>
                    {event.eventDate.split('T')[0].replace(/-/g, '/')} -{' '}
                    {event.eventDate.split('T')[1].split('.')[0]}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Feedback Modal */}
          {role==="Resident"?<div className="my-5">
            <button
              className="text-white bg-cyan-950 rounded-full p-1.5 float-right"
              onClick={handleOpenModal}
            >
              Give Feedback
            </button>
            <FeedBackModal open={openModal} close={handleCloseModal} eventId={eventId} />
          </div>:null}

          {/* Feedback List */}
          <div>
            {feedbacks.length > 0 ? (
              feedbacks.map(feedback => (
                <div
                  key={feedback.feedbackId}
                  className="bg-white p-2 my-3 rounded-lg drop-shadow-md"
                >
                  <p className="text-gray-800">{feedback.content}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 mt-5">No feedback available yet.</p>
            )}
          </div>
        </div>

        {/* Feedback Image */}
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/P1CtWcS/feedback-Image.png"
            alt="Feedback"
            className="w-[75%] float-right"
          />
        </div>
      </div>
    </div>
  );
}

export default EventFeedback;
