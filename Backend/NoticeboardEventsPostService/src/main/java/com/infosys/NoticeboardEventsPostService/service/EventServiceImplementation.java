package com.infosys.NoticeboardEventsPostService.service;

import com.infosys.NoticeboardEventsPostService.dto.EventDto;
import com.infosys.NoticeboardEventsPostService.dto.SocietyDto;
import com.infosys.NoticeboardEventsPostService.exception.EventException;
import com.infosys.NoticeboardEventsPostService.feign.SocietyManagementInterface;
import com.infosys.NoticeboardEventsPostService.model.Event;
import com.infosys.NoticeboardEventsPostService.repository.EventRepository;
import com.infosys.NoticeboardEventsPostService.response.EventResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImplementation implements EventService{

    @Autowired
    EventRepository eventRepository;

    @Autowired
    SocietyManagementInterface societyManagementInterface;
    @Override
    public EventResponse addEvent(String jwt, EventDto eventDto) {
        SocietyDto society=societyManagementInterface.getAdminDetails(jwt);
        Event newEvent=new Event();
        newEvent.setEventName(eventDto.getEventName());
        newEvent.setEventDate(eventDto.getEventDate());
        newEvent.setEventDetails(eventDto.getEventDetails());
        newEvent.setEventImage(eventDto.getEventImage());
        newEvent.setSocietyId(society.getSocietyId());
        Event savedEvent=eventRepository.save(newEvent);
        if (savedEvent.getEventId()!=null){
            return new EventResponse(savedEvent,"Event Created Successfully");
        }
        throw new EventException("Unable To Create Event");
    }

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @Override
    public EventResponse updateEvent(Long eventId, EventDto eventDto) throws EventException {
        Optional<Event> event=eventRepository.findById(eventId);
        if (event.isPresent()){
            Event existingEvent=event.get();

            if (!existingEvent.getEventName().equals(eventDto.getEventName())) {
                existingEvent.setEventName(eventDto.getEventName());
            }
            if (!existingEvent.getEventDate().equals(eventDto.getEventDate())) {
                existingEvent.setEventDate(eventDto.getEventDate());
            }
            if (!existingEvent.getEventDetails().equals(eventDto.getEventDetails())) {
                existingEvent.setEventDetails(eventDto.getEventDetails());
            }
            if (!existingEvent.getEventImage().equals(eventDto.getEventImage())) {
                existingEvent.setEventImage(eventDto.getEventImage());
            }
            Event updatedEvent = eventRepository.save(existingEvent);
            if (updatedEvent.getEventId()!=null){
                return new EventResponse(updatedEvent,"Event Updated Successfully");
            }
            throw new EventException("Unable To Update Event");
        }
        throw new EventException("Unable To Update Event");
    }

    @Override
    public EventResponse deleteEvent(Long eventId) throws EventException{
        if (!eventRepository.existsById(eventId)) {
            throw new EventException("Event Not Found");
        }
        eventRepository.deleteById(eventId);
        return new EventResponse(null,"Event Deleted Successfully");
    }

    @Override
    public Event getEventById(Long eventId) throws EventException{
        Optional<Event> event=eventRepository.findById(eventId);
        if (event.isPresent()){
            return event.get();
        }
        throw new EventException("Event Not Found");
    }
}
