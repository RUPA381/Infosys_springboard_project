package com.infosys.NoticeboardEventsPostService.service;

import com.infosys.NoticeboardEventsPostService.dto.EventDto;
import com.infosys.NoticeboardEventsPostService.exception.EventException;
import com.infosys.NoticeboardEventsPostService.model.Event;
import com.infosys.NoticeboardEventsPostService.response.EventResponse;

import java.util.List;

public interface EventService {
    public EventResponse addEvent(String jwt, EventDto eventDto) throws EventException;
    public List<Event> getAllEvents() throws EventException;
    public EventResponse updateEvent(Long eventId,EventDto eventDto) throws EventException;
    public EventResponse deleteEvent(Long eventId) throws EventException;
    public Event getEventById(Long eventId) throws EventException;
}
